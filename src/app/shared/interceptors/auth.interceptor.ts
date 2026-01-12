import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { StorageService } from "../services/storage/storage.service";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  // Inject StorageService (replaces constructor injection)
  const storageService = inject(StorageService);

  // URLs that should NOT have the Bearer token
  const excludedUrls = ['/assets/config/', '/api/auth', '/api/health'];
  const isExcluded = excludedUrls.some(url => req.url.includes(url));

  if (isExcluded) {
    return next(req); // skip adding token
  }

  // Get Bearer token from StorageService
  const token = storageService.getToken();
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req); // no token found, continue
};