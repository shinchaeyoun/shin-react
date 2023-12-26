/* eslint-disable */
import {
  configureStore,
  createSlice,
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
  initialState: [
    {
      name: 'All',
      link: '/',
      // icon: 'All'
    },
    {
      name: 'API',
      link: '/api',
      // icon: 'Api'
    },
    {
      name: 'Browser Extensions',
      link: '/browser-extensions',
      // icon: 'BrowserExtensions'
    },
    {
      name: 'CSS Frameworks',
      link: '/css-frameworks',
      // icon: 'Career'
    },
    {
      name: 'Career',
      link: '/career',
      // icon: 'Charts'
    },
    {
      name: 'Charts',
      link: '/charts',
      // icon: 'Cheatsheets'
    },
    {
      name: 'Cheatsheets',
      link: '/cheatsheets',
      // icon: 'CodeAutomation'
    },
    {
      name: 'Code Automation',
      link: '/code-automation',
      // icon: 'ContentNwriting'
    },
    {
      name: 'Content & Writing',
      link: '/content-and-writing',
      // icon: 'CssFrameworks'
    },
    {
      name: 'Design Mockup',
      link: '/design-mockup',
      // icon: 'DesignMockup'
    },
    {
      name: 'Design Resources',
      link: '/design-resources',
      // icon: 'DesignResources'
    },
    {
      name: 'Design Tools',
      link: '/design-tools',
      // icon: 'DesignTools'
    },
    {
      name: 'Developer Productivity',
      link: '/developer-productivity',
      // icon: 'DeveloperProductivity'
    },
    {
      name: 'Developer Resources',
      link: '/developer-resources',
      // icon: 'DeveloperResources'
    },
    {
      name: 'Developer Tools',
      link: '/developer-tools',
      // icon: 'DeveloperTools'
    },
    {
      name: 'Education',
      link: '/education',
      // icon: 'Education'
    },
    {
      name: 'Email Builders',
      link: '/email-builders',
      // icon: 'EmailBuilders'
    },
    {
      name: 'Email Tools',
      link: '/email-tools',
      // icon: 'EmailTools'
    },
    {
      name: 'Entertainment',
      link: '/entertainment',
      // icon: 'Entertainment'
    },
    {
      name: 'Freebies',
      link: '/freebies',
      // icon: 'Freebies'
    },
    {
      name: 'Illustrations',
      link: '/illustrations',
      // icon: 'Illustrations'
    },
    {
      name: 'JS Plugins',
      link: '/js-plugins',
      // icon: 'JsPlugins'
    },
    {
      name: 'Loaders & Spinners',
      link: '/loaders-and-spinners',
      // icon: 'LoadersNspinners'
    },
    {
      name: 'Marketing Resources',
      link: '/marketing-resources',
      // icon: 'MarketingResources'
    },
    {
      name: 'Misc',
      link: '/misc',
      // icon: 'Misc'
    },
    {
      name: 'Nocode',
      link: '/nocode',
      // icon: 'Nocode'
    },
    {
      name: 'Productivity',
      link: '/productivity',
      // icon: 'Productivity'
    },
    {
      name: 'SEO',
      link: '/seo',
      // icon: 'Seo'
    },
    {
      name: 'Stock Assets',
      link: '/stock-assets',
      // icon: 'StockAssets'
    },
    {
      name: 'Wireframe',
      link: '/wireframe',
      // icon: 'Wireframe'
    },
    {
      name: 'productivity',
      link: '/productivity',
      // icon: 'Productivity'
    },
    {
      name: 'Editors Choice',
      link: '/editors-choice',
      // icon: '<span>🔥</span>'
    },
  ],
  // reducers: {
    
  // }
});

let toolsItmes = createSlice({
  name: 'toolsItmes',
  initialState: [
    {
      name: 'Hoppscotch',
      explain: 'A free, fast and beautiful API request builder',
      img:'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free',
      bookmark: true,

    },
    {
      name: 'LinkPreview',
      explain: 'LinkPreview API - Free Link Preview Service',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'freemium',
      bookmark: false,

    },
    {
      name: '3',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'generous free plan',
      bookmark: false,

    },
    {
      name: '4',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'open source',
      bookmark: false,

    },
    {
      name: '5',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'paid',
      bookmark: false,

    },
    {
      name: '6',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'paid with trial',
      bookmark: false,

    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'practially free',
      bookmark: false,

    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'cheatsheets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/cheatsheets',
      tag: 'cheatsheets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'browser-extensions',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/browser-extensions',
      tag: 'browser extensions',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'css-frameworks',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/css-frameworks',
      tag: 'css frameworks',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'career',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/career',
      tag: 'career',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'charts',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/charts',
      tag: 'charts',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'code-automation',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/code-automation',
      tag: 'code automation',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'api',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/api',
      tag: 'api',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'content-and-writing',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/content-and-writing',
      tag: 'content & writing',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-mockup',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-mockup',
      tag: 'design mockup',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-resources',
      tag: 'design resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'design-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/design-tools',
      tag: 'design tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-productivity',
      tag: 'developer productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-resources',
      tag: 'developer resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'developer-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/developer-tools',
      tag: 'developer tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'education',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/education',
      tag: 'education',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-builders',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-builders',
      tag: 'email builders',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'email-tools',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/email-tools',
      tag: 'email tools',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'entertainment',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/entertainment',
      tag: 'entertainment',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'freebies',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/freebies',
      tag: 'freebies',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'icons',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/icons',
      tag: 'icons',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'illustrations',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/illustrations',
      tag: 'illustrations',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'js-plugins',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/js-plugins',
      tag: 'js plugins',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'loaders-and-spinners',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/loaders-and-spinners',
      tag: 'loaders & spinners',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'marketing-resources',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/marketing-resources',
      tag: 'marketing resources',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'misc',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/misc',
      tag: 'misc',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'nocode',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/nocode',
      tag: 'nocode',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'seo',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/seo',
      tag: 'seo',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'stock-assets',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/stock-assets',
      tag: 'stock assets',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'wireframe',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/wireframe',
      tag: 'wireframe',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'productivity',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/productivity',
      tag: 'productivity',
      option: 'free',
      bookmark: false,

    },
    {
      name: 'editors-choice',
      explain: 'A free, fast and beautiful API request builder',
      img: 'image',
      icon: 'image',
      artist: 'By Liyas Thomas',
      category: '/editors-choice',
      tag: 'editors choice',
      option: 'free',
      bookmark: false,

    },
  ],
  reducers: {
    setBookmark(state, action ){
      const idx = action.payload[0];
      const mark = action.payload[1];
      
      state[idx].bookmark = mark;

      console.log(state[idx].bookmark);
    }
  }
});

export default configureStore({
  reducer: {
    categorys: categorys.reducer,
    toolsItmes: toolsItmes.reducer
  }
});


export let { setBookmark } = toolsItmes.actions;