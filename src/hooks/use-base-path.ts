
/**
 * A hook that returns the base path for assets when deploying to GitHub Pages
 */
export const useBasePath = () => {
  // In development, use root path
  if (import.meta.env.DEV) {
    return '';
  }
  
  // In production (GitHub Pages), use the repository name as the base path
  // This helps with loading assets correctly
  const path = window.location.pathname.split('/');
  if (path.length > 1 && path[1] !== '') {
    return `/${path[1]}`;
  }
  
  return '';
};

export default useBasePath;
