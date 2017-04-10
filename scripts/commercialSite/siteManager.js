contactsJson = "";
showcaseJson = "";
function fetchContacts() {
    $.ajax({
        url: "userhandlers/gitcontacts.php",
        dataType: "JSON",
        success: function (json) {
            contactsJson = json;
            showContacts();
            commercialContactBodyOnloadOrOnresize();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}

function showContacts() {
    var contactCardsDiv = document.createElement("div");
    contactCardsDiv.id = "contactCards";
    document.getElementById("bodyContainer").appendChild(contactCardsDiv);
    
    contactsJson.forEach(function (element) {
        var contactCardClassDiv = document.createElement("div");
        contactCardClassDiv.className = "contactCard";
        contactCardsDiv.appendChild(contactCardClassDiv);
        
        var cardElentListClassUl = document.createElement("ul");
        cardElentListClassUl.className = "cardElementList";
        contactCardClassDiv.appendChild(cardElentListClassUl);
        
        var contactNameClassLi = document.createElement("li");
        contactNameClassLi.className = "contactName";
        cardElentListClassUl.appendChild(contactNameClassLi);
        var contactNameContactInfoSpan = document.createElement("span");
        contactNameContactInfoSpan.className = "contactInfo";
        contactNameContactInfoSpan.innerHTML = element[0];
        contactNameClassLi.appendChild(contactNameContactInfoSpan);
        
        var contactTitleClassLi = document.createElement("li");
        contactTitleClassLi.className = "contactTitle";
        cardElentListClassUl.appendChild(contactTitleClassLi);
        var contactTitleContactInfoSpan = document.createElement("span");
        contactTitleContactInfoSpan.className = "contactInfo";
        contactTitleContactInfoSpan.innerHTML = element[1];
        contactTitleClassLi.appendChild(contactTitleContactInfoSpan);
        
        var contactPhoneClassLi = document.createElement("li");
        contactPhoneClassLi.className = "contactPhone";
        cardElentListClassUl.appendChild(contactPhoneClassLi);
        var contactPhoneContactInfoSpan = document.createElement("span");
        contactPhoneContactInfoSpan.className = "contactInfo";
        contactPhoneContactInfoSpan.innerHTML = element[2];
        contactPhoneClassLi.appendChild(contactPhoneContactInfoSpan);
        
        var contactEmailClassLi = document.createElement("li");
        contactEmailClassLi.className = "contactEmail";
        cardElentListClassUl.appendChild(contactEmailClassLi);
        var contactEmailContactInfoSpan = document.createElement("span");
        contactEmailContactInfoSpan.className = "contactInfo";
        contactEmailContactInfoSpan.innerHTML = element[3];
        contactEmailClassLi.appendChild(contactEmailContactInfoSpan);
        
        var descriptionClassLi = document.createElement("li");
        descriptionClassLi.className = "description";
        descriptionClassLi.innerHTML = element[4];
        cardElentListClassUl.appendChild(descriptionClassLi);
        
    });
}

function fetchShowcaseOnload() {
    $.ajax({
        url: "userhandlers/gitshowcase.php",
        dataType: "JSON",
        success: function (json) {
            showcaseJson = json;
            showShowcase();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
}
function showShowcase() {
    var showcaseItemsDiv = document.createElement("div");
    showcaseItemsDiv.id = "showcaseItems";
    document.getElementById("bodyContainer").appendChild(showcaseItemsDiv);
    
    showcaseJson.forEach(function (element) {
        var showcaseItemClassDiv = document.createElement("div");
        showcaseItemClassDiv.className = "showcaseItem";
        showcaseItemsDiv.appendChild(showcaseItemClassDiv);
        
         var showcaseImage = document.createElement("img");
        showcaseImage.className = "showcaseImage";
        showcaseImage.src = "images/uploads/contacts/" + element[3];
        showcaseItemClassDiv.appendChild(showcaseImage);
        
        var showcaseElementListClassUl = document.createElement("ul");
        showcaseElementListClassUl.className = "showcaseElementList";
        showcaseItemClassDiv.appendChild(showcaseElementListClassUl);
        
        var showcaseTitleClassLi = document.createElement("li");
        showcaseTitleClassLi.className = "showcaseTitle";
        showcaseElementListClassUl.appendChild(showcaseTitleClassLi);
        var showcaseTitleShowcaseInfoSpan = document.createElement("span");
        showcaseTitleShowcaseInfoSpan.className = "showcaseInfo";
        showcaseTitleShowcaseInfoSpan.innerHTML = element[0];
        showcaseTitleClassLi.appendChild(showcaseTitleShowcaseInfoSpan);
        
        var showcaseDateClassLi = document.createElement("li");
        showcaseDateClassLi.className = "showcaseDate";
        showcaseElementListClassUl.appendChild(showcaseDateClassLi);
        var showcaseDateShowcaseInfoSpan = document.createElement("span");
        showcaseDateShowcaseInfoSpan.className = "showcaseInfo";
        showcaseDateShowcaseInfoSpan.innerHTML = element[1];
        showcaseDateClassLi.appendChild(showcaseDateShowcaseInfoSpan);
        
        var descriptionClassLi = document.createElement("li");
        descriptionClassLi.className = "showcaseDescription";
        descriptionClassLi.innerHTML = element[2];
        showcaseElementListClassUl.appendChild(descriptionClassLi);
        
    });
    commercialShowcaseBodyOnloadOrOnresize()
}