$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Hem");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-out-temperature" id="default-out-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basealarm-default-larm" id="default-larm"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><h2 class="value" data-bind="text: state, attr:{ style: state_style}"></h2><div id="Dialog" class="modalDialog"><div data-bind="attr:{style: panel_background_style}"><h2 id="close" class="modalDialogCloseButton">X</h2><h2 class="panel-state" data-bind="text: state, attr:{style: panel_state_style}"></h2><h2 class="panel-state" data-bind="text: code, attr:{style: panel_code_style}"></h2><div class="container">    <span data-bind="attr:{style: panel_button_style}" class="block" id="1">1</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="2">2</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="3">3</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="4">4</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="5">5</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="6">6</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="7">7</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="8">8</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block" id="9">9</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block block2" id="0">0</span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block mdi mdi-keyboard-backspace" id="BS"></span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block mdi mdi-home" id="AH" ></span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block mdi mdi-home-outline" id="AA"></span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block fa fa-power-off" id="DA"></span class="block">    <span data-bind="attr:{style: panel_button_style}" class="block block3" id="TR">Trigger</span class="block"></div></div></div></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-el-forbrukning" id="default-el-forbrukning"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-el-produktion" id="default-el-produktion"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-johan" id="default-johan"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-cicci" id="default-cicci"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-max" id="default-max"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hall" id="default-light-hall"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hall-spott" id="default-light-hall-spott"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-ute" id="default-light-ute"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-klimat-entre" id="default-klimat-entre"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><div class="levelunit2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="unit2" data-bind="html: unit, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-klimat-hall" id="default-klimat-hall"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><div class="levelunit2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="unit2" data-bind="html: unit, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-klimat-vardagsrum" id="default-klimat-vardagsrum"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><div class="levelunit2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="unit2" data-bind="html: unit, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-klimat-badrum" id="default-klimat-badrum"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><div class="levelunit2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="unit2" data-bind="html: unit, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'time_format': '24hr'})
    
        widgets["default-out-temperature"] = new basedisplay("default-out-temperature", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.tute', 'sub_entity': '', 'fields': {'title': 'Temperature', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;C'})
    
        widgets["default-larm"] = new basealarm("default-larm", "", "default", {'widget_type': 'basealarm', 'entity': 'alarm_control_panel.duvesjon_374', 'initial_string': 'Enter Code', 'post_service_ah': {'service': 'alarm_control_panel/alarm_arm_home', 'entity_id': 'alarm_control_panel.duvesjon_374'}, 'post_service_aa': {'service': 'alarm_control_panel/alarm_arm_away', 'entity_id': 'alarm_control_panel.duvesjon_374'}, 'post_service_da': {'service': 'alarm_control_panel/alarm_disarm', 'entity_id': 'alarm_control_panel.duvesjon_374'}, 'post_service_tr': {'service': 'alarm_control_panel/alarm_trigger', 'entity_id': 'alarm_control_panel.duvesjon_374'}, 'state_map': {'pending': 'Pending', 'armed_home': 'Armed Home', 'armed_away': 'Armed Away', 'disarmed': 'Disarmed', 'triggered': 'Triggered'}, 'fields': {'title': 'Hus', 'title2': '', 'state': '', 'code': ''}, 'static_css': {'title_style': 'color: #00aaff;', 'title2_style': 'color: #fff;', 'state_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'panel_state_style': 'color: #fff;', 'panel_code_style': 'color: #fff;', 'panel_background_style': 'background-color: #444;', 'panel_button_style': 'background-color: #666;'}, 'css': {}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-el-forbrukning"] = new basedisplay("default-el-forbrukning", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.eliq', 'sub_entity': '', 'fields': {'title': 'Förbrukning', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1})
    
        widgets["default-el-produktion"] = new basedisplay("default-el-produktion", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.produktion', 'sub_entity': '', 'fields': {'title': 'Produktion', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1})
    
        widgets["default-johan"] = new baseswitch("default-johan", "", "default", {'widget_type': 'baseswitch', 'entity': 'device_tracker.johans_iphone', 'state_active': 'home', 'state_inactive': 'not_home', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'johans_iphone', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'johans_iphone', 'location_name': 'not_home'}, 'fields': {'title': 'Johan', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-user', 'icon_off': 'fa-user'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'not_home': 'AWAY'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'active_map': ['home', 'zone 1', 'zone 2']})
    
        widgets["default-cicci"] = new baseswitch("default-cicci", "", "default", {'widget_type': 'baseswitch', 'entity': 'device_tracker.cecilias_iphone', 'state_active': 'home', 'state_inactive': 'not_home', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'cecilias_iphone', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'cecilias_iphone', 'location_name': 'not_home'}, 'fields': {'title': 'Cecilia', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-user', 'icon_off': 'fa-user'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'not_home': 'AWAY'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'active_map': ['home', 'zone 1', 'zone 2']})
    
        widgets["default-max"] = new baseswitch("default-max", "", "default", {'widget_type': 'baseswitch', 'entity': 'device_tracker.homeassistant_max', 'state_active': 'home', 'state_inactive': 'not_home', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'homeassistant_max', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'homeassistant_max', 'location_name': 'not_home'}, 'fields': {'title': 'Max', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-user', 'icon_off': 'fa-user'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'not_home': 'AWAY'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'active_map': ['home', 'zone 1', 'zone 2']})
    
        widgets["default-light-hall"] = new baselight("default-light-hall", "", "default", {'widget_type': 'baselight', 'entity': 'switch.hall', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.hall'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.hall'}, 'fields': {'title': 'Hall', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-light-hall-spott"] = new baselight("default-light-hall-spott", "", "default", {'widget_type': 'baselight', 'entity': 'light.hall_spottar', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.hall_spottar'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.hall_spottar'}, 'fields': {'title': 'Hall spott', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-light-ute"] = new baselight("default-light-ute", "", "default", {'widget_type': 'baselight', 'entity': 'switch.entre_ute', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.entre_ute'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.entre_ute'}, 'fields': {'title': 'Ute', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-klimat-entre"] = new baseclimate("default-klimat-entre", "", "default", {'widget_type': 'baseclimate', 'entity': 'climate.entre_temp', 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.entre_temp'}, 'fields': {'title': 'Entre', 'title2': '', 'unit': '', 'level': '', 'level2': ''}, 'icons': [], 'css': {}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'level_style': 'color: #00aaff;', 'level2_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'unit2_style': 'color: #00aaff;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-klimat-hall"] = new baseclimate("default-klimat-hall", "", "default", {'widget_type': 'baseclimate', 'entity': 'climate.hall_temp', 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.hall_temp'}, 'fields': {'title': 'Hall', 'title2': '', 'unit': '', 'level': '', 'level2': ''}, 'icons': [], 'css': {}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'level_style': 'color: #00aaff;', 'level2_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'unit2_style': 'color: #00aaff;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-klimat-vardagsrum"] = new baseclimate("default-klimat-vardagsrum", "", "default", {'widget_type': 'baseclimate', 'entity': 'climate.vardagsrum_temp', 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.vardagsrum_temp'}, 'fields': {'title': 'Vardagsrum', 'title2': '', 'unit': '', 'level': '', 'level2': ''}, 'icons': [], 'css': {}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'level_style': 'color: #00aaff;', 'level2_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'unit2_style': 'color: #00aaff;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-klimat-badrum"] = new baseclimate("default-klimat-badrum", "", "default", {'widget_type': 'baseclimate', 'entity': 'climate.badrum_temp', 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.badrum_temp'}, 'fields': {'title': 'Badrum', 'title2': '', 'unit': '', 'level': '', 'level2': ''}, 'icons': [], 'css': {}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'level_style': 'color: #00aaff;', 'level2_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'unit2_style': 'color: #00aaff;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    

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
    ha_status(stream_url, "Hem", widgets);

});