import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import AppsPagePreview from './preview-templates/AppsPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('apps', AppsPagePreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPostPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
