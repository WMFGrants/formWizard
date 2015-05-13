/*  ______________________________________________________________________________________
 * |                                                                                     |
 * |                    === WARNING: GADGET FILE ===                                     |
 * |                  Changes to this page affect many users.                            |
 * | Please discuss changes on the talk page or on [[MediaWiki_talk:Gadgets-definition]] |
 * |	 before editing.                                                                 |
 * |_____________________________________________________________________________________|
 *
 * "Forms" feature, to be used by the Wikimedia Foundation's Grants Programme
 */
//<nowiki>

$(function(){
	var namespace = mw.config.values['wgPageName'].split('/')[0];
	if ( namespace == 'Wikipedia:Co-op' ){
		mw.loader.load( 'ext.gadget.formWizard-core' );
	}
});
