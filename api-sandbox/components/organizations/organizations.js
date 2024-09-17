function myFunction() {
    document.getElementById("organizations_menu").classList.toggle("show");
}

class Organizations {

    constructor(containerId, token) {

        this.orgService = new OrganizationService(token);

        this.orgService.getMembership().then((res)=>{
            if(res.d.errorCode) {
                console.error(res);
            } else {
                let organizationsList = new Array();
                res.d.organizations.forEach(org=> {
                    console.log(org.id);
                    console.log(org);
                    organizationsList.push(org);
                    this.orgService.getOrganizationMembers(org.id).then((m) => {
                        console.log(m);
                    });
                });
                this.organizationsList = organizationsList;
                this.show(containerId, organizationsList);
            }
        });

    }

    show(containerId, organizationsList ) {
        let html = "<div class='dropdown'>"
        + "<button onclick='myFunction()' class='dropbtn'>Dropdown</button>"
        + "<div id='organizations_menu' class='dropdown-content\'>";
              organizationsList.forEach(org=> {
                 html+="<a id='"+ org.id +"' href='#home'>"+org.name+"</a>";
              });
        html +="</div>"
          + "</div>";

        appendHtmlElement(containerId, html);
    }


}
