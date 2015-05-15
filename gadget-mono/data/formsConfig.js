/*  Example Dict  */
  var form = {
  		'default':{
  			'config': {
  					'post-edit': 'Thank You for commenting',
  					'new-page': true,
  					'namespace': 'Grants',
  					'portal-page': '',
  					'page-template': '',
  					'infobox': '',
  					'talkpage-template': '',
  					'page-home': 'Grants:IEG/Test/'
  			},
  			'step-1':{
  					'projectNameTextbox': {
  							'type': 'smallTextBox',
  							'placeholder': 'Title',
  							'title': 'Enter the project title',
  							'characterLength':100,
  							'mandatory':true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'infobox',
  							'infobox-param':'project',
  							'validate': 'doesNotExists',
  							'page-title':true
  						},
  					'projectChangeValuesDropdown': {
  							'type': 'dropdownList',
  							'placeholder': 'Select a status',
  							'title': 'Move it to the appropriate Status',
  							'add-to': 'infobox',
  							'infobox-param': 'status',
  							'values':[
  										'withdrawn',
  										'active',
  										'postponed',
  										'something'
  									]
  						
  					},
  					'projectSummaryTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary',
  							'title': 'Tell us about your idea in a sentence or two',
  							'characterLength':400,
  							'section': 'Summary',
  							'mandatory': true,
  							'error-messageLength': 'Max length reached',
  							'error-notFilled': 'Mandatory field',
  							'add-to': 'section',
  							'section-header': 'Summary'
  						},
  					'projectProblemSolvedTextbox': {
  							'type': 'largeTextBox',
  							'placeholder': 'Click here to add summary',
  							'title': 'What are you trying to solve?',
  							'characterLength':400,
  							'section': 'Problem Solved',
  							'mandatory': false,
  							'add-to': 'section',
  							'section-header': 'Problems Solved'
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
  							'title': 'Would you like to invite others?',
  							'type': 'stepperList',
  							'roles': 'volunteer,tester,devloper,community_liason',
  							'add-to': 'infobox',
  							/*
  							 * the list under roles
  							 */
  							'infobox-param': 'list'
  						},
  					'projectImage':{
  							'type': 'image',
  							'title': 'Select an image for your project',
							'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/205px-Persian_Cat_%28kitten%29.jpg',
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
  			}	
  	};