# Publii Plugin: 404 Glitch Effect 
This plugin applies a glitch effect to the 404 page.

<p><img height="100" alt="publii plugin" title="Plugin icons" src="https://raw.githubusercontent.com/gpsblues/Publii-Plugin-404-Glitch-Effect/b5852c3caf483c827090fb81efcf4aa5ff9b0daa/.assets/thumbnail.svg"></p>

## Features
The `<main>` tag of the 404.html page is replaced with a fullscreen image featuring a customizable glitch effect and text.

![Screen](https://github.com/gpsblues/Publii-Plugin-404-Glitch-Effect/blob/main/.assets/screen.gif)*404 glitch effect in Simple3 theme.*

Images, text, CSS, and other parameters are customizable.

![Publii plugin screenshot](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-404-Glitch-Effect/refs/heads/main/.assets/screen.png)

## Installation and Usage
- Download the .zip file of the latest plugin version from the [release page](https://github.com/gpsblues/Publii-Plugin-Front-Slider/releases/).
- Open Publii CMS and [install the plugin](https://getpublii.com/docs/plugins.html#installingplugins).
- [Enable the plugin](https://getpublii.com/docs/plugins.html#enablingplugins).
- Set plugin options by clicking on its name.
- Save and Preview/Sync your website to see it in action.

## How it works
The plugin works exclusively on the `<main>` tag of the 404.html page, replacing the original content with a full-screen image that has a customizable glitch effect (which users can adjust). The original menu and footer remain unchanged.

The plugin works by creating a "sandwich" of your cover image, with different clip-path animations applied to it. For more technical details, check out the [original repository](https://github.com/codrops/CSSGlitchEffect/) that inspired this plugin.

## Options
The basic options are very intuitive and consist of:
- Uploading the background image
- Defining the text content
- Set main colors
- and more

Unfortunately it's not possible to keep the original 404 page text defined within the theme.

The advanced options involve setting up some values that let you modify the appearance, like
- Animation delay
- Additional overlay colors
- Custom CSS
- and more

I recommend playing with the parameters until you find the combination that satisfies you most.

### Design note
The most important aspect to consider is **customizing the CSS rules**, which can vary significantly from one theme to another depending on how the original 404 page's HTML structure differs.

In most cases, the basic settings will give you good results. However, some themes with special structures, like those using grid systems or side panels, might require more advanced customization rules.

If you discover any interesting settings, don't hesitate to share them in this repository by opening an issue.

## Disclaimer
This plugin is an unofficial extension for the [Publii CMS](https://getpublii.com/). I do not assume any responsibility for potential issues or malfunctions that may occur while using this plugin. Additionally, support for this plugin is not guaranteed.

For official Publii resources, please visit the [Publii CMS Official Repository](https://marketplace.getpublii.com/plugins/).

## Credits
The project is inspired by [CSSGlitchEffect](https://github.com/codrops/CSSGlitchEffect/) by botelho (Codrops).

Do you like this plugin? Are you using it in production? Consider giving it a star :)

Happy designing!