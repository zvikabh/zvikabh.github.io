CREATE FUNCTION [dbo].[ITMpoint]
(
@lat DECIMAL(12, 9),
@lon DECIMAL(12, 9)
)
RETURNS varchar(30)
AS
BEGIN
/****************** 1. Molodensky WGS84 -> GRS80 *******************/
       -- Declare the return variable here
       DECLARE
       @dX float = 48,
       @dY float = -55,
       @dZ float =  -52,
 
       @slat float = SIN(@lat * pi() / 180),
       @clat float = COS(@lat * pi() / 180),
       @slon float = SIN(@lon * pi() / 180),
       @clon float = COS(@lon * pi() / 180),
       @ssqlat float,
       @from_f float = 0.00335281066474748,
       @df float = 0.0033528106811823 - 0.00335281066474748,
       @from_a float = 6378137,
       @da float = 0,
       @from_esq float = 0.0066943800042608068,
       @adb float = 1.0 / (1.0 - 0.00335281066474748),
      
       @ResultVar varchar(30) = ''
 
       SET @ssqlat = @slat*@slat
 
       DECLARE
       @rn float = @from_a / SQRT(1 - @from_esq * @ssqlat),
       @rm float = @from_a * (1 - @from_esq) / POWER((1 - @from_esq * @ssqlat), 1.5),
       @from_h float = 0,
       @dlat float,
       @olat float,
       @dlon float,
       @olon float
 
       -- result lat (radians)
       SET @dlat = (-@dX * @slat * @clon - @dY * @slat * @slon + @dZ * @clat
                           + @da * @rn * @from_esq * @slat * @clat / @from_a +
                           + @df * (@rm * @adb + @rn / @adb) * @slat * @clat) / (@rm + @from_h)
       SET @olat = (@lat * pi() / 180) + @dlat;
 
       --result lon (radians)
       SET @dlon = (-@dX * @slon + @dY * @clon) / ((@rn + @from_h) * @clat)
       SET @olon = (@lon * pi() / 180) + @dlon
 
 
       /************************* 2. Lat/Lon (GRS80) -> Local Grid (ITM) *********************/
       DECLARE
       @a float = 6378137,
       @e float = SQRT(@from_esq),
       @b float = 6356752.3141
 
       --===============
    -- Lat/Lon -> TM
       --===============
       DECLARE
       @slat1 float = Sin(@olat),
    @clat1 float = Cos(@olat),
       @clat1sq float = POWER(Cos(@olat), 2)
 
       DECLARE
    @tanlat1sq float = @slat1 * @slat1 / @clat1sq,
    @e2 float = @from_esq,
    @e4 float = POWER(@from_esq, 2),
    @e6 float = POWER(@from_esq, 3),
    @eg float = (@e * @a / @b),
    @eg2 float = POWER((@e * @a / @b), 2)
 
       DECLARE
       @l1 float = 1 - @e2 / 4 - 3 * @e4 / 64 - 5 * @e6 / 256,
    @l2 float = 3 * @e2 / 8 + 3 * @e4 / 32 + 45 * @e6 / 1024,
    @l3 float = 15 * @e4 / 256 + 45 * @e6 / 1024,
    @l4 float = 35 * @e6 / 3072
 
       DECLARE
    @M float = @a * (@l1 * @olat - @l2 * Sin(2 * @olat) + @l3 * Sin(4 * @olat) - @l4 * Sin(6 * @olat)),
    --@rho float = a*(1-e2) / pow((1-(e*slat1)*(e*slat1)),1.5);
    @nu float = @a / Sqrt(1 - (@e * @slat1) * (@e * @slat1)),
    @p float = @olon - 0.61443473225468925,
    @k0 float = 1.0000067
 
       DECLARE
    -- y float = northing float = K1 + K2p2 + K3p4, where
    @K1 float = @M * @k0,
    @K2 float = @k0 * @nu * @slat1 * @clat1 / 2,
    @K3 float = (@k0 * @nu * @slat1 * @clat1 * @clat1sq / 24) * (5 - @tanlat1sq + 9 * @eg2 * @clat1sq + 4 * @eg2 * @eg2 * @clat1sq * @clat1sq)
   
       DECLARE
       -- x = easting = K4p + K5p3, where
    @K4 float = @k0 * @nu * @clat1,
    @K5 float = (@k0 * @nu * @clat1 * @clat1sq / 6) * (1 - @tanlat1sq + @eg2 * @clat1 * @clat1);
 
 
       DECLARE
       -- ING east
       @X float = @K4 * @p + @K5 * @p * @p * @p + 219529.584,
       -- ING north
    @Y float = @K1 + @K2 * @p * @p + @K3 * @p * @p * @p * @p - 2885516.9488
 
       DECLARE
       @East int = ROUND(@X, 0),
       @North int = ROUND(@Y, 0)
 
       SET @ResultVar = CONVERT(varchar(10), @East) + ' , ' + CONVERT(varchar(10), @North)
 
       -- Return the result of the function
       RETURN @ResultVar
 
END
