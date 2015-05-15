/*  Example Dict  */
  var formsGadgetConfig = {
  		'default':{
  			'config': {
  					'post-edit': 'Thank you for creating your idea! Visit x page for some tips about how to take your idea to the next level.',
  					'new-page': true,
  					'namespace': 'Grants',
  					'portal-page': 'IdeaLab',
  					'page-template': '',
  					'infobox': 'Probox/Idealab',
  					'talkpage-template': '',
                    'page-home': 'Grants:IEG/Test/',
                    'toolkit-name': '',
                    'toolkit-template': ''
  			},
  			'step-1':{
  					'projectNameTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': 'Short title',
  							'title': 'What should we call your idea?',
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'project',
  							'validate': 'doesNotExists',
                            'page-title':true
  						},
  					'projectSummaryTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Add your summary here',
  							'title': 'Briefly summarize your idea in a sentence',
  							'characterLength':200,
  							'mandatory': true,
  							'error-messageLength': "You've reached the word limit",
  							'error-notFilled': 'Please fill out this mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'summary',
  						},
                    'projectMethodsTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary',
  							'title': 'Tell us about your methods in a line or two',
  							'add-to': 'section',
  							'section-header': 'Methods',
  							'visibility': 'hidden',
  							'value': 'These are the methods we will use.',
  							'parent': 'projectProblemSolvedTextbox'
  							
  						},
  					'projectProblemSolvedTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to explain the issue you want to address with this idea',
  							'title': "What is the problem you're trying to solve?",
  							'characterLength':1000,
  							'section': "What is the problem you're trying to solve?",
  							'mandatory': false,
  							'add-to': 'section',
  							'section-header': "What is the problem you're trying to solve?"
  						},
  					'projectSolutionTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to explain how your idea might solve this problem ',
  							'title': 'What is your solution?',
  							'characterLength':1000,
  							'section': 'What is your solution?',
  							'mandatory': false,
  							'add-to': 'section',
  							'section-header': 'What is your solution?'
  						},
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
  					'nextButton':{
  							'type':'nextButton',
  							'title':'Next'
  						},
  				},
  				'step-2':{
  					'roleSelectionList':{
  							'title': 'Does this idea need any specific kinds of participants to help turn it into action?',
  							'type': 'stepperList',
  							'choiceList': [
  									{
  										'key': 'community_organizer',
  										'value': 0
  									},
  									{
  										'key': 'designer',
  										'value': 0
  									},
  									{
  										'key': 'community_organizer',
  										'value': 0
  									},
  									{
  										'key': 'developer',
  										'value': 0
  									},
  									{
  										'key': 'project_manager',
  										'value': 0
  									},
  									{
  										'key': 'researcher',
  										'value': 0
  									},
  							],
  							'hidden': [
  									{
  										'key': 'timestamp',
  										'value': '~~~~'
  									},
  									{
  										'key': 'status',
  										'value': 'withdrawn'
  									},
  									{
  										'key': 'more_participants',
  										'value': 'YES'
  									}
  							],
  							'add-to': 'infobox',
  						},
  					'projectImage':{
  							'type': 'image',
  							'title': 'Select an image for your project',
  							'textbox-title': 'Enter a file name',
							'url':"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/205px-Persian_Cat_%28kitten%29.jpg",
							'add-to': 'infobox',
							'infobox-param': 'image',
							'validate': true
  						},
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
					'backButton':{
  							'type':'backButton',
  							'title':'Back'
  						},
  					'nextButton':{
  							'type':'doneButton',
  							'title':'Done'
  						},
  				}
  			},
  		'Learning_patterns':{
  			'config': {
  					'post-edit': 'Thank You for creating a pattern',
  					'new-page': true,
  					'namespace': 'Grants',
  					'portal-page': '',
  					'page-template': '',
  					'infobox': '',
  					'talkpage-template': '',
                    'page-home':  'Grants:Learning_patterns/test/'
  			},
  			'step-1':{
  					'projectNameTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "Title",
  							'title': "Enter the pattern title",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'pattern',
  							'validate': 'doesNotExists',
                                                        'page-title':true
  						},
  					'projectSummaryTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary of the problem',
  							'title': 'Describe the problem in a sentence or two',
  							'characterLength':200,
  							'mandatory': true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'problem',
  						},
  					'projectProblemSolvedTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary of the solution',
  							'title': 'Describe the solution in a sentence or two',
  							'characterLength':200,
  							'mandatory': true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'solution',
  						},  						
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
  					'nextButton':{
  							'type':'nextButton',
  							'title':'Next'
  						},
  				},
  				'step-2':{
  					'roleSelectionList':{
  							'title': 'What type of pattern is this?',
  							'type': 'stepperList',
  							'roles': 'gender_gap,surveys,events,online_engagement,',
  							'add-to': 'infobox',
  							'infobox-param': 'pattern_type'
  						},
  					'projectImage':{
  							'type': 'image',
  							'title': 'Select an image for your project',
							'url':"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/205px-Persian_Cat_%28kitten%29.jpg",
							'add-to': 'infobox',
							'infobox-param': 'image',
							'validate': true
  						},
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
					'backButton':{
  							'type':'backButton',
  							'title':'Back'
  						},
  					'nextButton':{
  							'type':'doneButton',
  							'title':'Done'
  						},
  				}
  			},
  		'TPS':{
  			'config': {
  					'post-edit': 'Thank You for submitting your request',
  					'new-page': true,
  					'namespace': 'Grants',
  					'portal-page': '',
  					'page-template': '',
  					'infobox': '',
  					'talkpage-template': '',
                    'page-home':  'Grants:TPS/Test/'
  			},
  			'step-1':{
  					'eventTitleTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "Request title",
  							'title': "Enter the request title",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'event',
  							'validate': 'doesNotExists',
                                                        'page-title': true
  						},
  					'requesterNameTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "Requester",
  							'title': "Enter your username",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'requester',
  						},   
  					'requesterCountryTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "example: USA",
  							'title': "Enter your country where you live",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'country',
  						},   	
  					'requestAmountTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "price in USD",
  							'title': "Enter the amount you are requesting",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'amount',
  						},   	  						  												 										
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
  					'nextButton':{
  							'type':'nextButton',
  							'title':'Next'
  						},
  				},
  				'step-2':{
  					'eventLocationTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "Event location",
  							'title': "Enter the event location",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'location',
  						},   				
  					'eventDateTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "example: July 14 2014",
  							'title': "Enter the date(s) of the event",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'dates',
  						},   	  
  					'eventWebsiteTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': "e.g http://meta.wikimedia.org",
  							'title': "Enter the website",
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'website',
  						}, 
  					'projectSummaryTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary of the event',
  							'title': 'Tell us about your event in a sentence or two',
  							'characterLength':400,
  							'section': 'Summary',
  							'mandatory': false,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'section',
  							'section-header': 'Summary'
  						},	  						  	    						
  					'cancelButton':{
  							'type': 'cancelButton',
  							'title':'Cancel'
  						},
					'backButton':{
  							'type':'backButton',
  							'title':'Back'
  						},
  					'nextButton':{
  							'type':'doneButton',
  							'title':'Done'
  						},
  				}
  			}		  					
  	};