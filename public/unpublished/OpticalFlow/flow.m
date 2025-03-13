% flow - calculate revised optical flow
% flow(f1,f2)
% f1, f2 - file names of two frames in movie, on which calculation is based

function flow(f1,f2)

% read image files
Im1=double(imread(f1));
Im2=double(imread(f2));

% normalize to range 0-1
Im1 = Im1 / 256;
Im2 = Im2 / 256;

% display images on screen
figure;
subplot(4,2,1); imshow(Im1,[]); title('Image1');
subplot(4,2,2); imshow(Im2,[]); title('Image2');

[M,N] = size(Im1);

% window size parameter (a square window of smooth-by-smooth pixels is used)
smooth = 13; % window size is 11x11, but we need two more pixels for gradient calculation
hsmooth = floor(smooth/2);

% repeat for every block in image
for m=(hsmooth+1):smooth:(M-hsmooth-1)
   %fprintf('%.0f%% complete...\n',100*m/M);
   for n=(hsmooth+1):smooth:(N-hsmooth-1)
      % Take local section of image
      a = Im1((m-hsmooth):(m+hsmooth),(n-hsmooth):(n+hsmooth));
      b = Im2((m-hsmooth):(m+hsmooth),(n-hsmooth):(n+hsmooth));
      
      % Calculate derivatives
      e   = (a+b)/2; %mean power
      e_t = (b-a);
      e_x = e(3:end,2:end-1)-e(1:end-2,2:end-1);
      e_y = e(2:end-1,3:end)-e(2:end-1,1:end-2);
      
      e   = e(2:end-1,2:end-1); % to ensure that e is same length as e_x and e_y
      e_t = e_t(2:end-1,2:end-1);
      
      % Generate matrix A (see text)
      A = [e_x(:) e_y(:) e(:) -ones(size(e,1)*size(e,2),1)];
      
      % Solve using SVD
      [U,S,V] = svd(A,0);
      if(S(end,end)/S(1,1) < 1e-10)
         % matrix is ill-conditioned; ignore this data point
         mmse=zeros(4,1);
      else
         mmse = V*diag(1./diag(S))*U'*e_t(:); % MMSE solution for deltas
      end;
      
      % Store results
      i = (m-hsmooth-1)/smooth+1;
      j = (n-hsmooth-1)/smooth+1;
      delta_x(i,j) = mmse(1);
      delta_y(i,j) = mmse(2);
      delta_m(i,j) = mmse(3);
      delta_c(i,j) = mmse(4);
   end;
end;

% plot delta-x and delta-y components as a quiver-plot
subplot(2,1,2);
quiver(-delta_y(end:-1:1,:),delta_x(end:-1:1,:));
set(gca,'XTick',[]); set(gca,'YTick',[]);
title('(\delta x, \delta y) quiver plot');

% plot delta-m and delta-c
subplot(4,2,3); imshow(delta_m); title('\delta m/\delta t');
subplot(4,2,4); imshow(delta_c); title('\delta c/\delta t');
fprintf('delta m: mean=%.2f, SD=%.2f, min=%.2f, max=%.2f\n', mean(delta_m(:)), std(delta_m(:)), min(delta_m(:)), max(delta_m(:)));
fprintf('delta c: mean=%.2f, SD=%.2f, min=%.2f, max=%.2f\n', mean(delta_c(:)), std(delta_c(:)), min(delta_c(:)), max(delta_c(:)));
set(gcf,'PaperPositionMode','auto'); % comes out better when printed
