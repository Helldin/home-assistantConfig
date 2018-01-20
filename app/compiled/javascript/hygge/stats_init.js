$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Cam Panel");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-top-temperature" id="default-top-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-to-floortemperature" id="default-to-floortemperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-mitt-temperature" id="default-mitt-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-from-floortemperature" id="default-from-floortemperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-botten-temperature" id="default-botten-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sol-temperature" id="default-sol-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-load-cam-panel" id="default-load-cam-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-load-stats-panel" id="default-load-stats-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 6)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-top-temperature"] = new basedisplay("default-top-temperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.tank_topp', 'sub_entity': '', 'fields': {'title': 'Över', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-to-floortemperature"] = new basedisplay("default-to-floortemperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.tofloor', 'sub_entity': '', 'fields': {'title': 'Till golvvärme', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-mitt-temperature"] = new basedisplay("default-mitt-temperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.tank_mitt', 'sub_entity': '', 'fields': {'title': 'Mitten', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-from-floortemperature"] = new basedisplay("default-from-floortemperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.fromfloor', 'sub_entity': '', 'fields': {'title': 'Från golvvärme', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-botten-temperature"] = new basedisplay("default-botten-temperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.tank_bott', 'sub_entity': '', 'fields': {'title': 'Botten', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-sol-temperature"] = new basedisplay("default-sol-temperature", "", "hygge", {'widget_type': 'basedisplay', 'entity': 'sensor.tank_sol', 'sub_entity': '', 'fields': {'title': 'Sol', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'value_style': 'color: #A15734;font-size: 250%;', 'text_style': 'color: #8F3C09;font-size: 100%;', 'unit_style': 'color: #A15734;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-load-main-panel"] = new javascript("default-load-main-panel", "", "hygge", {'widget_type': 'javascript', 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'icon_active_style': 'color: #8F3C09;', 'icon_inactive_style': 'color: #8F3C09;'}, 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'icon_inactive': 'fa-home', 'dashboard': 'start'})
    
        widgets["default-load-cam-panel"] = new javascript("default-load-cam-panel", "", "hygge", {'widget_type': 'javascript', 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-camera'}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'icon_active_style': 'color: #8F3C09;', 'icon_inactive_style': 'color: #8F3C09;'}, 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'icon_inactive': 'fa-camera', 'dashboard': 'cam'})
    
        widgets["default-load-stats-panel"] = new javascript("default-load-stats-panel", "", "hygge", {'widget_type': 'javascript', 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-area-chart'}, 'static_css': {'title_style': 'color: #313131;', 'title2_style': 'color: #B8B6B3;', 'widget_style': 'background-color: rgba(179,177,172,0.70);'}, 'css': {'icon_active_style': 'color: #8F3C09;', 'icon_inactive_style': 'color: #8F3C09;'}, 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'icon_inactive': 'fa-area-chart', 'dashboard': 'stats'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Cam Panel", widgets);

});