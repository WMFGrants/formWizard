/*  ______________________________________________________________________________________
 * |                                                                                     |
 * |                    === WARNING: GADGET FILE ===                                     |
 * |                  Changes to this page affect many users.                            |
 * | Please discuss changes on the talk page or on [[MediaWiki_talk:Gadgets-definition]] |
 * |	 before editing.                                                                 |
 * |_____________________________________________________________________________________|
 *
 * See https://meta.wikimedia.org/wiki/Meta:FormWizard for usage and description.
 */
//<nowiki>

$(function(){
	var namespace = mw.config.values['wgPageName'].split('/')[0];
	if ( namespace == 'Wikipedia:Co-op' ){
		mw.loader.load( 'ext.gadget.formWizard-core' );
	}
});
