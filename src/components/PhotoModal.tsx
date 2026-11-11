import React, { useState, useRef } from 'react';
import { X, Upload, Github, Image as ImageIcon, Check, RefreshCw, AlertCircle, Camera } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSavePhoto: (photoUrl: string) => void;
}

const GITHUB_AVATAR = "https://github.com/avinashpasuluru9-pixel.png";
const DEFAULT_STUDIO_PHOTO = "/src/assets/images/avatar_student_coder_1793870266549.jpg";
const WORKSPACE_PHOTO = "/src/assets/images/hero_ai_workspace_1793870265805.jpg";

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto
}) => {
  const [selectedSource, setSelectedSource] = useState<'upload' | 'github' | 'url' | 'presets'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(currentPhoto || GITHUB_AVATAR);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle local file upload with canvas optimization to prevent localStorage quota overflow
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (JPG, PNG, WEBP, etc.)');
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Resize image to max 1200px dimension using Canvas for fast load & localStorage durability
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setPreviewUrl(optimizedDataUrl);
          setIsProcessing(false);
        } else {
          setPreviewUrl(event.target?.result as string);
          setIsProcessing(false);
        }
      };
      img.onerror = () => {
        setErrorMessage('Failed to decode the selected image.');
        setIsProcessing(false);
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setErrorMessage('Failed to read the file.');
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyGithub = () => {
    setPreviewUrl(GITHUB_AVATAR);
    setErrorMessage(null);
  };

  const handleApplyCustomUrl = () => {
    if (!customUrl.trim()) {
      setErrorMessage('Please enter an image URL');
      return;
    }
    setPreviewUrl(customUrl.trim());
    setErrorMessage(null);
  };

  const handleSave = () => {
    if (!previewUrl) return;
    onSavePhoto(previewUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-2 text-blue-600 dark:text-blue-400">
          <Camera className="w-5 h-5" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Set Your Profile Photo
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          Upload your personal photo from your computer or phone, or sync directly with your GitHub profile picture.
        </p>

        {/* Source Selector Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-6">
          <button
            onClick={() => setSelectedSource('upload')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedSource === 'upload'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Upload File
          </button>
          <button
            onClick={() => {
              setSelectedSource('github');
              handleApplyGithub();
            }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedSource === 'github'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            GitHub Avatar
          </button>
          <button
            onClick={() => setSelectedSource('url')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedSource === 'url'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Image Link
          </button>
          <button
            onClick={() => setSelectedSource('presets')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedSource === 'presets'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Studio Presets
          </button>
        </div>

        {/* Main Tab Content */}
        <div className="space-y-4 mb-6">
          {selectedSource === 'upload' && (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-slate-800/40"
              >
                <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Click to browse or drop your photo
                </div>
                <p className="text-xs text-slate-500">
                  Supports JPG, PNG, WEBP from your phone, laptop, or desktop
                </p>
              </div>
            </div>
          )}

          {selectedSource === 'github' && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500">Target Profile</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    avinashpasuluru9-pixel
                  </div>
                </div>
              </div>
              <button
                onClick={handleApplyGithub}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
              >
                Use GitHub Photo
              </button>
            </div>
          )}

          {selectedSource === 'url' && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Direct Image Link
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleApplyCustomUrl}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap"
                >
                  Load
                </button>
              </div>
            </div>
          )}

          {selectedSource === 'presets' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPreviewUrl(DEFAULT_STUDIO_PHOTO)}
                className={`p-2 rounded-xl border text-left flex items-center gap-3 transition-all ${
                  previewUrl === DEFAULT_STUDIO_PHOTO
                    ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <img
                  src={DEFAULT_STUDIO_PHOTO}
                  alt="Student portrait"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">Studio Portrait</div>
                  <div className="text-slate-500">Student Developer</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPreviewUrl(WORKSPACE_PHOTO)}
                className={`p-2 rounded-xl border text-left flex items-center gap-3 transition-all ${
                  previewUrl === WORKSPACE_PHOTO
                    ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <img
                  src={WORKSPACE_PHOTO}
                  alt="AI Workspace"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">AI Workspace</div>
                  <div className="text-slate-500">Neural Monitors</div>
                </div>
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Live Preview Box */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-4 mb-6">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-300 dark:border-slate-600">
            {isProcessing ? (
              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                Loading...
              </div>
            ) : (
              <img
                src={previewUrl}
                alt="Selected preview"
                className="w-full h-full object-cover object-top"
                onError={() => {
                  setErrorMessage('Could not load image from this source. Check the URL or pick another image.');
                }}
              />
            )}
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500">Active Selection</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Avinash Pasuluru Photo
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Will appear on your Hero card, Resume modal, and Top navigation bar.
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => {
              setPreviewUrl(DEFAULT_STUDIO_PHOTO);
              setErrorMessage(null);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Photo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
