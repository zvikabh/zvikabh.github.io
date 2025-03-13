

CREATE FUNCTION ITM2GRID
(
	@Nvr int,
	@Evr int

)
RETURNS varchar(30)
AS
BEGIN
	-- Declare the return variable here
DECLARE 
@RetVr varchar(30),

@false_n float = 2885516.9488,
@false_e float = 219529.584,
@k0 float = 1.0000067

DECLARE
@y float = @Nvr + @false_n,
@x float = @Evr - @false_e,
@M float = (@Nvr + @false_n) / @k0,

@a float = 6378137,
@b float = 6356752.3141,
@e float = 0.0818191910428276,
@esq float = 0.00669438002290272,

@lon0 float = 0.61443473225468920,
@lat0 float = 0.55386965463774187


DECLARE
@mu float = @M / (@a * (1 - @e * @e / 4 - 3 * POWER(@e, 4) / 64 - 5 * POWER(@e, 6) / 256)),
@ee float = Sqrt(1 - @esq),
@e1 float
SET @e1 = (1 - @ee) / (1 + @ee)

DECLARE
@j1 float = 3 * @e1 / 2 - 27 * @e1 * @e1 * @e1 / 32,
@j2 float = 21 * @e1 * @e1 / 16 - 55 * @e1 * @e1 * @e1 * @e1 / 32,
@j3 float = 151 * @e1 * @e1 * @e1 / 96,
@j4 float = 1097 * @e1 * @e1 * @e1 * @e1 / 512


DECLARE
@fp float,
@sinfp float,
@cosfp float,
@tanfp float,
@eg float,
@eg2 float,
@C1 float,
@T1 float,
@R1 float,
@N1 float,
@D float,
@Q1 float,
@Q2 float,
@Q3 float,
@Q4 float,
@Q5 float,
@Q6 float,
@Q7 float,
@lat float,
@lon float

SET @fp = @mu + @j1 * Sin(2 * @mu) + @j2 * Sin(4 * @mu) + @j3 * Sin(6 * @mu) + @j4 * Sin(8 * @mu);

SET @sinfp = Sin(@fp);
SET @cosfp = Cos(@fp);
SET @tanfp = @sinfp / @cosfp;
SET @eg = (@e * @a / @b);
SET @eg2 = @eg * @eg;
SET @C1 = @eg2 * @cosfp * @cosfp;
SET @T1 = @tanfp * @tanfp;
SET @R1 = @a * (1 - @e * @e) / POWER(1 - (@e * @sinfp) * (@e * @sinfp), 1.5);
SET @N1 = @a / Sqrt(1 - (@e * @sinfp) * (@e * @sinfp));
SET @D = @x / (@N1 * @k0);

SET @Q1 = @N1 * @tanfp / @R1;
SET @Q2 = @D * @D / 2;
SET @Q3 = (5 + 3 * @T1 + 10 * @C1 - 4 * @C1 * @C1 - 9 * @eg2 * @eg2) * (@D * @D * @D * @D) / 24;
SET @Q4 = (61 + 90 * @T1 + 298 * @C1 + 45 * @T1 * @T1 - 3 * @C1 * @C1 - 252 * @eg2 * @eg2) * (@D * @D * @D * @D * @D * @D) / 720;
-- result lat
SET @lat = @fp - @Q1 * (@Q2 - @Q3 + @Q4);

SET @Q5 = @D;
SET @Q6 = (1 + 2 * @T1 + @C1) * (@D * @D * @D) / 6;
SET @Q7 = (5 - 2 * @C1 + 28 * @T1 - 3 * @C1 * @C1 + 8 * @eg2 * @eg2 + 24 * @T1 * @T1) * (@D * @D * @D * @D * @D) / 120;
SET @lon = @lon0 + (@Q5 - @Q6 + @Q7) / @cosfp;



/****************** 1. Molodensky WGS80 -> GRS84 *******************/
DECLARE
@dX float = -48,
@dY float = 55,
@dZ float = 52,

@slat float = Sin(@lat),
@clat float = Cos(@lat),
@slon float = Sin(@lon),
@clon float = Cos(@lon),
@ssqlat float 

SET @ssqlat = @slat * @slat

DECLARE
@df float,
@da float,
@from_f float = 0.0033528106811823,
@from_a float = 6378137,
@from_esq float = 0.00669438002290272,
@adb float,
@rn float,
@rm float,
@from_h float,
@dlat float,
@dlon float,
@olat float,
@olon float,
@flat DECIMAL(12, 9),
@flon DECIMAL(12, 9)

SET @df = 0.00335281066474748 - @from_f;
SET @da = 6378137.0 - @from_a;

SET @adb = 1.0 / (1.0 - @from_f);
SET @rn = @from_a / Sqrt(1 - @from_esq * @ssqlat);
SET @rm = @from_a * (1 - @from_esq) / Power((1 - @from_esq * @ssqlat), 1.5);
SET @from_h = 0.0; --we're flat!

SET @dlat = (-@dX * @slat * @clon - @dY * @slat * @slon + @dZ * @clat
                           + @da * @rn * @from_esq * @slat * @clat / @from_a +
                           + @df * (@rm * @adb + @rn / @adb) * @slat * @clat) / (@rm + @from_h);
SET @olat = @lat + @dlat;

SET @dlon = (-@dX * @slon + @dY * @clon) / ((@rn + @from_h) * @clat);
SET @olon = @lon + @dlon;


--SELECT @olat, @olat, @rn
-- final results
SET @flat = @olat * 180 / pi();
SET @flon = @olon * 180 / pi();

SET @RetVr = CONVERT(varchar(30), @flat) + '-' + CONVERT(varchar(30), @flon)

-- Return the result of the function
RETURN @RetVr

END
GO

