/* eslint-disable */
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

import { ReactComponent as All } from './assets/images/tools-item/alltools.svg'
import { ReactComponent as Api } from './assets/images/tools-item/api.svg'
import { ReactComponent as BrowserExtensions } from './assets/images/tools-item/browser-extensions.svg'
import { ReactComponent as Career } from './assets/images/tools-item/career.svg'
import { ReactComponent as Charts } from './assets/images/tools-item/charts.svg'
import { ReactComponent as Cheatsheets } from './assets/images/tools-item/cheatsheets.svg'
import { ReactComponent as CodeAutomation } from './assets/images/tools-item/code-automation.svg'
import { ReactComponent as ContentNwriting } from './assets/images/tools-item/content-and-writing.svg'
import { ReactComponent as CssFrameworks } from './assets/images/tools-item/css-frameworks.svg'
import { ReactComponent as DesignMockup } from './assets/images/tools-item/design-mockup.svg'
import { ReactComponent as DesignResources } from './assets/images/tools-item/design-resources.svg'
import { ReactComponent as DesignTools } from './assets/images/tools-item/design-tools.svg'
import { ReactComponent as DeveloperProductivity } from './assets/images/tools-item/developer-productivity.svg'
import { ReactComponent as DeveloperResources } from './assets/images/tools-item/developer-resources.svg'
import { ReactComponent as DeveloperTools } from './assets/images/tools-item/developer-tools.svg'
import { ReactComponent as Education } from './assets/images/tools-item/education.svg'
import { ReactComponent as EmailBuilders } from './assets/images/tools-item/email-builders.svg'
import { ReactComponent as EmailTools } from './assets/images/tools-item/email-tools.svg'
import { ReactComponent as Entertainment } from './assets/images/tools-item/entertainment.svg'
import { ReactComponent as Freebies } from './assets/images/tools-item/freebies.svg'
import { ReactComponent as Icons } from './assets/images/tools-item/icons.svg'
import { ReactComponent as Illustrations } from './assets/images/tools-item/illustrations.svg'
import { ReactComponent as JsPlugins } from './assets/images/tools-item/js-plugins.svg'
import { ReactComponent as LoadersNspinners } from './assets/images/tools-item/loaders-and-spinners.svg'
import { ReactComponent as MarketingResources } from './assets/images/tools-item/marketing-resources.svg'
import { ReactComponent as Misc } from './assets/images/tools-item/misc.svg'
import { ReactComponent as Nocode } from './assets/images/tools-item/nocode.svg'
import { ReactComponent as Productivity } from './assets/images/tools-item/productivity.svg'
import { ReactComponent as Seo } from './assets/images/tools-item/seo.svg'
import { ReactComponent as StockAssets } from './assets/images/tools-item/stock-assets.svg'
import { ReactComponent as Wireframe } from './assets/images/tools-item/wireframe.svg'

import img from './assets/images/tools-item/image.png'

let categorys = createSlice({
  name: 'categorys',
  name: 'tags',  initialState: [
    {
      name: 'All',
      link: '/',
      icon: <All width='18px' height='18px'/>
    },
    {
      name: 'API',
      link: '/api',
      icon: <Api width='18px' height='18px'/>
    },
    {
      name: 'Browser Extensions',
      link: '/browser-extensions',
      icon: <BrowserExtensions width='18px' height='18px'/>
    },
    {
      name: 'CSS Frameworks',
      link: '/css-frameworks',
      icon: <Career width='18px' height='18px'/>
    },
    {
      name: 'Career',
      link: '/career',
      icon: <Charts width='18px' height='18px'/>
    },
    {
      name: 'Charts',
      link: '/charts',
      icon: <Cheatsheets width='18px' height='18px'/>
    },
    {
      name: 'Cheatsheets',
      link: '/cheatsheets',
      icon: <CodeAutomation width='18px' height='18px'/>
    },
    {
      name: 'Code Automation',
      link: '/code-automation',
      icon: <ContentNwriting width='18px' height='18px'/>
    },
    {
      name: 'Content & Writing',
      link: '/content-and-writing',
      icon: <CssFrameworks width='18px' height='18px'/>
    },
    {
      name: 'Design Mockup',
      link: '/design-mockup',
      icon: <DesignMockup width='18px' height='18px'/>
    },
    {
      name: 'Design Resources',
      link: '/design-resources',
      icon: <DesignResources width='18px' height='18px'/>
    },
    {
      name: 'Design Tools',
      link: '/design-tools',
      icon: <DesignTools width='18px' height='18px'/>
    },
    {
      name: 'Developer Productivity',
      link: '/developer-productivity',
      icon: <DeveloperProductivity width='18px' height='18px'/>
    },
    {
      name: 'Developer Resources',
      link: '/developer-resources',
      icon: <DeveloperResources width='18px' height='18px'/>
    },
    {
      name: 'Developer Tools',
      link: '/developer-tools',
      icon: <DeveloperTools width='18px' height='18px'/>
    },
    {
      name: 'Education',
      link: '/education',
      icon: <Education width='18px' height='18px'/>
    },
    {
      name: 'Email Builders',
      link: '/email-builders',
      icon: <EmailBuilders width='18px' height='18px'/>
    },
    {
      name: 'Email Tools',
      link: '/email-tools',
      icon: <EmailTools width='18px' height='18px'/>
    },
    {
      name: 'Entertainment',
      link: '/entertainment',
      icon: <Entertainment width='18px' height='18px'/>
    },
    {
      name: 'Freebies',
      link: '/freebies',
      icon: <Freebies width='18px' height='18px'/>
    },
    {
      name: 'Icons',
      link: '/icons',
      icon: <Icons width='18px' height='18px'/>
    },
    {
      name: 'Illustrations',
      link: '/illustrations',
      icon: <Illustrations width='18px' height='18px'/>
    },
    {
      name: 'JS Plugins',
      link: '/js-plugins',
      icon: <JsPlugins width='18px' height='18px'/>
    },
    {
      name: 'Loaders & Spinners',
      link: '/loaders-and-spinners',
      icon: <LoadersNspinners width='18px' height='18px'/>
    },
    {
      name: 'Marketing Resources',
      link: '/marketing-resources',
      icon: <MarketingResources width='18px' height='18px'/>
    },
    {
      name: 'Misc',
      link: '/misc',
      icon: <Misc width='18px' height='18px'/>
    },
    {
      name: 'Nocode',
      link: '/nocode',
      icon: <Nocode width='18px' height='18px'/>
    },
    {
      name: 'Productivity',
      link: '/productivity',
      icon: <Productivity width='18px' height='18px'/>
    },
    {
      name: 'SEO',
      link: '/seo',
      icon: <Seo width='18px' height='18px'/>
    },
    {
      name: 'Stock Assets',
      link: '/stock-assets',
      icon: <StockAssets width='18px' height='18px'/>
    },
    {
      name: 'Wireframe',
      link: '/wireframe',
      icon: <Wireframe width='18px' height='18px'/>
    },
    {
      name: 'productivity',
      link: '/productivity',
      icon: <Productivity width='18px' height='18px'/>
    },
    {
      name: 'Editors Choice',
      link: '/editors-choice',
      icon: <span>🔥</span>
    },
  ],
  reducers: {
    
  }
});

let toolsItmes = createSlice({
  name: 'toolsItmes',
  initialState: [
    {
      name: 'Hoppscotch',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free'
    },
    {
      name: 'LinkPreview',
      explain: 'LinkPreview API - Free Link Preview Service',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'freemium'
    },
    {
      name: '3',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'generous free plan'
    },
    {
      name: '4',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'open source'
    },
    {
      name: '5',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'paid'
    },
    {
      name: '6',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'paid with trial'
    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'practially free'
    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free'
    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free'
    },
    {
      name: 'cheatsheets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/cheatsheets',
      tag: 'cheatsheets',
      option: 'free'
    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free'
    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free'
    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free'
    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free'
    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free'
    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free'
    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free'
    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free'
    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free'
    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free'
    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free'
    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free'
    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free'
    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free'
    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free'
    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free'
    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free'
    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free'
    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free'
    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free'
    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free'
    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free'
    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free'
    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free'
    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free'
    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free'
    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free'
    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free'
    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free'
    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free'
    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free'
    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free'
    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free'
    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free'
    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free'
    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free'
    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free'
    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free'
    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free'
    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free'
    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free'
    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free'
    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free'
    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free'
    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free'
    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free'
    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free'
    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free'
    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free'
    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free'
    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free'
    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free'
    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free'
    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free'
    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free'
    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free'
    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free'
    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free'
    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free'
    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free'
    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free'
    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free'
    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free'
    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free'
    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free'
    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free'
    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free'
    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free'
    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free'
    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free'
    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free'
    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free'
    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free'
    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free'
    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free'
    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free'
    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free'
    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free'
    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free'
    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free'
    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free'
    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free'
    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free'
    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free'
    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free'
    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free'
    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free'
    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free'
    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free'
    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free'
    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free'
    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free'
    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free'
    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free'
    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free'
    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free'
    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free'
    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free'
    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free'
    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free'
    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free'
    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free'
    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free'
    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free'
    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free'
    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free'
    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free'
    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free'
    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free'
    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free'
    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free'
    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free'
    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free'
    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free'
    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free'
    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: <img src={img} alt='hoppscotch' />,
      icon: <img src={img} alt='hoppscotch' />,
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free'
    },
  ]
})


export default configureStore({
  reducer: {
    categorys: categorys.reducer,
    toolsItmes: toolsItmes.reducer
  }
});


// export let { gotoContentTop,changeTopArr } = categorys.actions;
// export let { gotoContentTop,changeTopArr } = tags.ations;