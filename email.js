function sendEmailMsg()
{
	var to = "inf100@albany.edu";
	var subj = document.getElementById("emailSubject").value;
	var body = document.getElementById("emailBody").value;

    window.open("mailto:"+to+"?subject="+subj+"&body="+body);
}


function emailUpdates()
{
	var to = "inf100@albany.edu";
	var subj = "ListServ Add";
	var body = "ListServ Add";

    window.open("mailto:"+to+"?subject="+subj+"&body="+body);
}
