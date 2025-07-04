// https://github.com/GetPublii/Publii/discussions/1359

class GLitch404 {
    constructor (API, name, config) {
        this.API = API; 		// gives you an access to the plugins API functions
		this.name = name; 		// retrieved plugin name - probably will be removed in the future
		this.config = config; 	// gives access to the plugin saved config
    }	

    // optional
	// Insertions - should be used to input your own HTML/CSS/JS code in specific places of the website.
    addInsertions () {
        this.API.addInsertion('publiiHead', this.headInsertion, 1, this)
    }

    // optional
	// Modifiers - use them if you need to modify existing output e.g. to filter titles.
    addModifiers () {
		this.API.addModifier('htmlOutput', this.modifyHTML, 1, this);    
    }
	

    // Custom code below
    
	headInsertion (rendererInstance) {
		//exit if not 404 page
		if(rendererInstance.globalContext.context != '404') {return}
		
		//plugin Url
		const pluginUrl = `${rendererInstance.siteConfig.domain.replace(/\\/g,"/")}/media/plugins/glitch-404`
		
		//personal settings 
		let myCSS = `
		/* overwrite default values */
		main {
			--image-url: url(${pluginUrl}/${this.config.imgUrl});
			--glitch-height: calc(${this.config.glitchHeight});
			--color-text: ${this.config.textColor};
			--blend-color-5: ${this.config.color5};
			--blend-color-4: ${this.config.color4};
			--time-anim: ${this.config.timeAnim}s;
			--delay-anim: ${this.config.delayAnim}s;
			--overlay-color: ${this.config.overlayColor};
		}
		/* add custom CSS */
		${this.config.personalCSS};
		`

		//minification
		myCSS = minifyCSS(myCSS);


		//add style and link to CSS file in head
		return `
			<link rel="stylesheet" href="${pluginUrl}/plugin.css">
			<style>${myCSS}</style>
		`

	}

    modifyHTML (rendererInstance, text) {

		let page404 = this.is404(rendererInstance)

		if(page404 == true) {
			let button = ''
			if(this.config.linkText) {button = `<p><a href="${rendererInstance.globalContext.website.baseUrl}" class="btn-404">${this.config.linkText}</a></p>`}
			let classAnimation = ''
			if(this.config.animation) {classAnimation='text-animation'}
			


			//personal HTML  ${this.config}
			const myHtml = `
			<div class="glitch-setup glitch-content">
				<div class="glitch">
					<div class="glitch__img"></div>
					<div class="glitch__img"></div>
					<div class="glitch__img"></div>
					<div class="glitch__img"></div>
					<div class="glitch__img"></div>
				</div>
				<div class="text ${classAnimation}">
					<h1>${this.config.titleText}</h1>
					<p class="h4">${this.config.descriptionText}</p>
					${button}
				</div>
			</div>
		`;
			//replace <main> content
			text = text.replace(/<main(\s[^>]*)?>.*?<\/main>/s, '<main$1>' + myHtml + '</main>');
		}

		//add personal HTML 
		return text
	}

	is404(rendererInstance) {
		//Check if the current page is 404
		let context = rendererInstance.globalContext.context;
		return (Array.isArray(context) && context.includes('404'))? true:false

	}

}

function minifyCSS(code) {
    //Simple script to minify CSS
    return code
        .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')  // Removes comments and newline
        .replace(/\s*([:;{}])\s*/g, '$1');                      // Removes unnecessary whitespace around : ; { }
} 

module.exports = GLitch404;