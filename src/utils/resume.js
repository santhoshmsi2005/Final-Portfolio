import { PROFILE } from '../constants/profile';

export const openAndDownloadResume = async (e) => {
  e?.preventDefault();

  window.open(PROFILE.resumeUrl, '_blank', 'noopener,noreferrer');

  try {
    const response = await fetch(PROFILE.resumeUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = PROFILE.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch {
    const link = document.createElement('a');
    link.href = PROFILE.resumeUrl;
    link.download = PROFILE.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
