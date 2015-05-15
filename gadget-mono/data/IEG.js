var formsGadgetConfig = {
	"create":{ 
		},

	"expand":{ "config":{
  					"post-edit": "Thank you for turning your idea into an Individual Engagement Grant proposal! Please feel free to continue editing your page to improve it over time, and watch the discussion page for more information.",
  					"namespace": "Grants",
  					"infobox": "Probox",
  					"talkpage-template": "",
                    "page-home": "Grants:IdeaLab",
                    "dialog-title": "<translate>
                    				Let's turn your Idea into an IEGrant proposal</translate>",
                    "error-not-logged-in": "You are not logged in - please login to your account before continuing."
  			},
  			"step-1":{
                         "projectGoalsSection": {
  							"type": "largeTextBox",
  							"placeholder": "leave this blank!",
  							"title": "This is the 'project goals' section header",
  							"characterLength":1000,
  							"mandatory": "false",
  							"add-to": "section",
  							"section-header": "IEG Goals",
                            "value": "",
                            "comment": "<!--In this section: briefly explain what are you trying to accomplish with this project, or what do you expect will change as a result of this idea.-->__TOC__"
  						},
  						 "portalIEG": {
  						 	"type": "smallTextBox",
  						 	"visibility": "hidden",
  						 	"add-to": "infobox",
  						 	"infobox-param": "portal",
  						 	"value": "IEG"
  						 },  												  						
                    "nextButton": {
  							"type":"nextButton",
  							"title":"Next"
  						},
  					"cancelButton":{
  							"type": "cancelButton",
  							"title":"Cancel"
  						},
  				},
  				"step-2":{
  					"projectImage":{
  							"type": "image",
  							"title": "Want a custom image to represent your project?",
  							"imageTitleBox": "To use a different image from Wikimedia Commons, enter the filename below",
                            "text-1": "This is the default image that will appear",
                            "placeholder": "IdeaLab_beaker_and_flask.svg",
							"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/IdeaLab_beaker_and_flask.svg/200px-IdeaLab_beaker_and_flask.svg.png",
							"add-to": "infobox",
							"infobox-param": "image",
							"validate": true,
                            "link":"Search Wikimedia Commons for an image"
  						},
                    "nextButton":{
  							"type":"doneButton",
  							"title":"Create my idea"
  						},
					"backButton":{
  							"type":"backButton",
  							"title":"Back"
  						},
  				} 
		}			
  	};
