// ==UserScript==
// @name         ��У���Զ�ˢ��
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       z
// @match        *://qust.class.gaoxiaobang.com/class/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
function start(){
		var classFix = document.getElementsByClassName("gxb-icon-check unchecked");
	//��ѡȫ����
for(var i=0;i<classFix.length;i++){
	var Fix = classFix[i];
	Fix.className="gxb-icon-check checked";
}
   //�ύ
	var oBtn = document.getElementsByClassName('gxb-btn_ submit');
for(var i=0;i<oBtn.length;i++){
	var click = oBtn[i];
	click.click();	
}
	//�����ۿ�
	var oBtn2 = document.getElementsByClassName('gxb-btn_ player');
for(var i=0;i<oBtn2.length;i++){
	var click = oBtn2[i];
	click.click();	
}}
window.setInterval(start,10000);

// Your code here...