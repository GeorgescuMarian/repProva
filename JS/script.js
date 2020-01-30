function Avvia() {
    var div=$("<div></div>");
    div.prop("id","accordion");
    div.appendTo($("#div2"));

    $("#accordion").addClass("accordion");

    var h3_1=$("<h3>Elenco 1</h3>");

    var divE1=$("<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>");
    $("#accordion").append(h3_1);
    $("#accordion").append(divE1);

    var h3_2=$("<h3>Elenco 2</h3>");

    var divE2=$("<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>");
    $("#accordion").append(h3_2);
    $("#accordion").append(divE2);

    var h3_3=$("<h3>Elenco 3</h3>");
    var divE3=$("<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>");
    $("#accordion").append(h3_3);
    $("#accordion").append(divE3);
    $("#accordion").accordion({collapsible:true});

    /*for(var i=0;i<4;i++)
    {
        var divPiccoli=$("<div></div>");
        divPiccoli.prop("id","divP"+i);
        divPiccoli.addClass("divPiccoli");
        divPiccoli.appendTo($("#div3"));
    }
    for(i=0;i<3;i++)
    {
        var radioBtn = $('<input type="radio" name="rbtnCount" />');
        radioBtn.prop("id","rd"+i);
        radioBtn.appendTo('#divP0');
    }

    var t1=$("<label for= 'rd0'>heightStyle:auto</label>");
    t1.appendTo('#divP0');
    $("#rd1").prop("name","heightStyle:auto");
    $("#rd2").prop("name","heightStyle:content");
    $("#rd0,#rd1,#rd2").appendTo($("#divP0"));*/
}
