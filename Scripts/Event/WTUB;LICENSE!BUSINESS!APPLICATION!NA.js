if(balanceDue > 0 && wfTask == "Permit Issuance" && wfStatus == "Issue"){
	cancel = true;
	showMessage = true;
	comment("You cannot issue this license until all fees are paid.");
}