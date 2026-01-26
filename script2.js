function searchItem() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    let guest_room = document.getElementById("guest_room");
    let hot_kitchen = document.getElementById("hot_kitchen");
    let nf_chemistry_laboratory = document.getElementById("nf_chemistry_laboratory");
    let asian_kitchen = document.getElementById("asian_kitchen");
    let cold_kitchen = document.getElementById("cold_kitchen");
    let function_room = document.getElementById("function_room");
    let stock_room = document.getElementById("stock_room");
    let mock_travel_office = document.getElementById("mock_travel_office");
    let record_section = document.getElementById("record_section");
    let office_of_elementary_principal = document.getElementById("office_of_elementary_principal");
    let nf_108_science_laboratory_stockroom = document.getElementById("nf_108_science_laboratory_stockroom");
    let nf109_chemistry = document.getElementById("nf109_chemistry");
    let nf110_biology = document.getElementById("nf110_biology");
    let nf111_physics_laboratory = document.getElementById("nf111_physics_laboratory");
    let consultation_rm = document.getElementById("consultation_rm");
    let mb102 = document.getElementById("mb102");
    let mb101 = document.getElementById("mb101");
    let nb102 = document.getElementById("nb102");
    let nb101 = document.getElementById("nb101");
    let tle_room = document.getElementById("tle_room");
    let ba101_midwifery = document.getElementById("ba101_midwifery");
    let ba102_audio_visual_room = document.getElementById("ba102_audio_visual_room");
    let ba103_junior_high_faculty = document.getElementById("ba103_junior_high_faculty");
    let osa = document.getElementById("osa");
    let digicom = document.getElementById("digicom");
    let guidance_office = document.getElementById("guidance_office");
    let bursar = document.getElementById("bursar");
    let stage = document.getElementById("stage");
    let shs110 = document.getElementById("shs110");
    let shs109 = document.getElementById("shs109");
    let shs108 = document.getElementById("shs108");
    let shs107 = document.getElementById("shs107");
    let shs106 = document.getElementById("shs106");
    let shs105 = document.getElementById("shs105");
    let office_of_the_vice_principal = document.getElementById("office_of_the_vice_principal");
    let clinic = document.getElementById("clinic");
    let senior_high_school_faculty = document.getElementById("senior_high_school_faculty");
    let office_of_the_high_school_principal = document.getElementById("office_of_the_high_school_principal");
    let maingate = document.getElementById("maingate");
    let canteen_maingate = document.getElementById("canteen_maingate");
    let ncb101 = document.getElementById("ncb101");

    let nf201_computer_lab = document.getElementById("nf201_computer_lab");
    let nf202_computer_lab = document.getElementById("nf202_computer_lab");
    let nf203 = document.getElementById("nf203");
    let nf204 = document.getElementById("nf204");
    let nf205 = document.getElementById("nf205");
    let college_library = document.getElementById("college_library");
    let nf208_deans_office = document.getElementById("nf208_deans_office");
    let nf209 = document.getElementById("nf209");
    let nf210 = document.getElementById("nf210");
    let nf211 = document.getElementById("nf211");
    let accredation_room = document.getElementById("accredation_room");
    let mb203 = document.getElementById("mb203");
    let mb202 = document.getElementById("mb202");
    let mb201 = document.getElementById("mb201");
    let nb202 = document.getElementById("nb202");
    let nb201 = document.getElementById("nb201");
    let office_of_avp = document.getElementById("office_of_avp");
    let high_school_library = document.getElementById("high_school_library");
    let elementary_library = document.getElementById("elementary_library");
    let shs210 = document.getElementById("shs210");
    let shs209 = document.getElementById("shs209");
    let shs208 = document.getElementById("shs208");
    let shs207 = document.getElementById("shs207");
    let shs206 = document.getElementById("shs206");
    let shs205 = document.getElementById("shs205");
    let shs204 = document.getElementById("shs204");
    let shs203 = document.getElementById("shs203");
    let shs202 = document.getElementById("shs202");
    let shs201 = document.getElementById("shs201");
    let ncb201 = document.getElementById("ncb201");
    let cb201 = document.getElementById("cb201");
    let cb202 = document.getElementById("cb202");
    let cb203 = document.getElementById("cb203");
    let cb204 = document.getElementById("cb204");
    let cb205 = document.getElementById("cb205");
    let cb206 = document.getElementById("cb206");
    let cb207 = document.getElementById("cb207");
    let cb208 = document.getElementById("cb208");
    let cb209 = document.getElementById("cb209");
    let cb210 = document.getElementById("cb210");
    let cb211 = document.getElementById("cb211");

    let mb303 = document.getElementById("mb303");
    let mb302 = document.getElementById("mb302");
    let mb301 = document.getElementById("mb301");
    let shs311 = document.getElementById("shs311");
    let shs310 = document.getElementById("shs310");
    let shs309 = document.getElementById("shs309");
    let shs308 = document.getElementById("shs308");
    let shs307 = document.getElementById("shs307");
    let shs306 = document.getElementById("shs306");
    let shs305 = document.getElementById("shs305");
    let shs304 = document.getElementById("shs304");
    let shs303 = document.getElementById("shs303");
    let shs302 = document.getElementById("shs302");
    let shs301 = document.getElementById("shs301");
    let shs300 = document.getElementById("shs300");
    let ncb301 = document.getElementById("ncb301");
    let cb301 = document.getElementById("cb301");
    let cb302 = document.getElementById("cb302");
    let cb303 = document.getElementById("cb303");
    let cb304 = document.getElementById("cb304");
    let cb305 = document.getElementById("cb305");
    let cb306 = document.getElementById("cb306");
    let cb307 = document.getElementById("cb307");
    let cb308 = document.getElementById("cb308");
    let cb309 = document.getElementById("cb309");
    let cb310_courtroom = document.getElementById("cb310_courtroom");
    let cb311_defense_tactic_room = document.getElementById("cb311_defense_tactic_room");

    let booth = document.getElementById("booth");
    let ncb401 = document.getElementById("ncb401");
    let bench = document.getElementById("bench");
    let court = document.getElementById("court");
    let canteen_cb = document.getElementById("canteen_cb");
    let canteen_mb = document.getElementById("canteen_mb");
    
    
    

    if (guest_room.textContent.toLowerCase().includes(input)) {
        guest_room.style.display = "";
    } else {
        guest_room.style.display = "none";
    }

    if (canteen_mb.textContent.toLowerCase().includes(input)) {
        canteen_mb.style.display = "";
    } else {
        canteen_mb.style.display = "none";
    }
    if (canteen_cb.textContent.toLowerCase().includes(input)) {
        canteen_cb.style.display = "";
    } else {
        canteen_cb.style.display = "none";
    }

    
    if (hot_kitchen.textContent.toLowerCase().includes(input)) {
        hot_kitchen.style.display = "";
    } else {
        hot_kitchen.style.display = "none";
    }

    
    if (nf_chemistry_laboratory.textContent.toLowerCase().includes(input)) {
        nf_chemistry_laboratory.style.display = "";
    } else {
        nf_chemistry_laboratory.style.display = "none";
    }

    
    if (asian_kitchen.textContent.toLowerCase().includes(input)) {
       asian_kitchen.style.display = "";
    } else {
        asian_kitchen.style.display = "none";
    }

    
    if (cold_kitchen.textContent.toLowerCase().includes(input)) {
        cold_kitchen.style.display = "";
    } else {
        cold_kitchen.style.display = "none";
    }

    
    if (function_room.textContent.toLowerCase().includes(input)) {
        function_room.style.display = "";
    } else {
        function_room.style.display = "none";
    }

    
    if (stock_room.textContent.toLowerCase().includes(input)) {
        stock_room.style.display = "";
    } else {
        stock_room.style.display = "none";
    }

    
    if (mock_travel_office.textContent.toLowerCase().includes(input)) {
        mock_travel_office.style.display = "";
    } else {
        mock_travel_office.style.display = "none";
    }

    
    if (record_section.textContent.toLowerCase().includes(input)) {
        record_section.style.display = "";
    } else {
        record_section.style.display = "none";
    }

    
    if (office_of_elementary_principal.textContent.toLowerCase().includes(input)) {
        office_of_elementary_principal.style.display = "";
    } else {
        office_of_elementary_principal.style.display = "none";
    }

    
    if (nf_108_science_laboratory_stockroom.textContent.toLowerCase().includes(input)) {
        nf_108_science_laboratory_stockroom.style.display = "";
    } else {
        nf_108_science_laboratory_stockroom.style.display = "none";
    }

    
    if (nf109_chemistry.textContent.toLowerCase().includes(input)) {
       nf109_chemistry.style.display = "";
    } else {
        nf109_chemistry.style.display = "none";
    }

    
    if (nf109_chemistry.textContent.toLowerCase().includes(input)) {
       nf109_chemistry.style.display = "";
    } else {
        nf109_chemistry.style.display = "none";
    }

    
    if (nf110_biology.textContent.toLowerCase().includes(input)) {
        nf110_biology.style.display = "";
    } else {
       nf110_biology.style.display = "none";
    }

    
    if (nf111_physics_laboratory.textContent.toLowerCase().includes(input)) {
        nf111_physics_laboratory.style.display = "";
    } else {
        nf111_physics_laboratory.style.display = "none";
    }

    
    if (consultation_rm.textContent.toLowerCase().includes(input)) {
        consultation_rm.style.display = "";
    } else {
        consultation_rm.style.display = "none";
    }

    
    if (mb102.textContent.toLowerCase().includes(input)) {
       mb102.style.display = "";
    } else {
       mb102.style.display = "none";
    }

    
    if (mb101.textContent.toLowerCase().includes(input)) {
        mb101.style.display = "";
    } else {
        mb101.style.display = "none";
    }

    
    if (nb102.textContent.toLowerCase().includes(input)) {
        nb102.style.display = "";
    } else {
        nb102.style.display = "none";
    }

    
    if (nb101.textContent.toLowerCase().includes(input)) {
        nb101.style.display = "";
    } else {
        nb101.style.display = "none";
    }

    
    if (tle_room.textContent.toLowerCase().includes(input)) {
       tle_room.style.display = "";
    } else {
        tle_room.style.display = "none";
    }

    
    if (ba101_midwifery.textContent.toLowerCase().includes(input)) {
        ba101_midwifery.style.display = "";
    } else {
        ba101_midwifery.style.display = "none";
    }

    
    if (ba102_audio_visual_room.textContent.toLowerCase().includes(input)) {
       ba102_audio_visual_room.style.display = "";
    } else {
        ba102_audio_visual_room.style.display = "none";
    }

    
    if (ba103_junior_high_faculty.textContent.toLowerCase().includes(input)) {
        ba103_junior_high_faculty.style.display = "";
    } else {
        ba103_junior_high_faculty.style.display = "none";
    }

    
    if (osa.textContent.toLowerCase().includes(input)) {
        osa.style.display = "";
    } else {
        osa.style.display = "none";
    }

    
    if (digicom.textContent.toLowerCase().includes(input)) {
        digicom.style.display = "";
    } else {
        digicom.style.display = "none";
    }

    
    if (guidance_office.textContent.toLowerCase().includes(input)) {
        guidance_office.style.display = "";
    } else {
        guidance_office.style.display = "none";
    }

    
    if (bursar.textContent.toLowerCase().includes(input)) {
        bursar.style.display = "";
    } else {
        bursar.style.display = "none";
    }

    
    if (stage.textContent.toLowerCase().includes(input)) {
        stage.style.display = "";
    } else {
        stage.style.display = "none";
    }

    
    if (shs110.textContent.toLowerCase().includes(input)) {
        shs110.style.display = "";
    } else {
        shs110.style.display = "none";
    }

    
    if (shs109.textContent.toLowerCase().includes(input)) {
        shs109.style.display = "";
    } else {
        shs109.style.display = "none";
    }

    
    if (shs108.textContent.toLowerCase().includes(input)) {
        shs108.style.display = "";
    } else {
        shs108.style.display = "none";
    }

    
    if (shs107.textContent.toLowerCase().includes(input)) {
        shs107.style.display = "";
    } else {
       shs107.style.display = "none";
    }

    
    if (shs106.textContent.toLowerCase().includes(input)) {
        shs106.style.display = "";
    } else {
        shs106.style.display = "none";
    }

    
    if (shs105.textContent.toLowerCase().includes(input)) {
        shs105.style.display = "";
    } else {
        shs105.style.display = "none";
    }

    
    if (office_of_the_vice_principal.textContent.toLowerCase().includes(input)) {
        office_of_the_vice_principal.style.display = "";
    } else {
        office_of_the_vice_principal.style.display = "none";
    }

    
    if (clinic.textContent.toLowerCase().includes(input)) {
        clinic.style.display = "";
    } else {
        clinic.style.display = "none";
    }

    
    if (senior_high_school_faculty.textContent.toLowerCase().includes(input)) {
        senior_high_school_faculty.style.display = "";
    } else {
        senior_high_school_faculty.style.display = "none";
    }

    
    if (office_of_the_high_school_principal.textContent.toLowerCase().includes(input)) {
        office_of_the_high_school_principal.style.display = "";
    } else {
        office_of_the_high_school_principal.style.display = "none";
    }

    
    if (maingate.textContent.toLowerCase().includes(input)) {
        maingate.style.display = "";
    } else {
        maingate.style.display = "none";
    }

    
    if (canteen_maingate.textContent.toLowerCase().includes(input)) {
        canteen_maingate.style.display = "";
    } else {
        canteen_maingate.style.display = "none";
    }

    
    if (ncb101.textContent.toLowerCase().includes(input)) {
        ncb101.style.display = "";
    } else {
        ncb101.style.display = "none";
    }








    
    if (nf201_computer_lab .textContent.toLowerCase().includes(input)) {
        nf201_computer_lab .style.display = "";
    } else {
        nf201_computer_lab .style.display = "none";
    }

    
    if (nf202_computer_lab.textContent.toLowerCase().includes(input)) {
        nf202_computer_lab.style.display = "";
    } else {
        nf202_computer_lab.style.display = "none";
    }

    
    if (nf203.textContent.toLowerCase().includes(input)) {
        nf203.style.display = "";
    } else {
        nf203.style.display = "none";
    }

    
    if (nf204.textContent.toLowerCase().includes(input)) {
        nf204.style.display = "";
    } else {
        nf204.style.display = "none";
    }

    
    if (nf205.textContent.toLowerCase().includes(input)) {
        nf205.style.display = "";
    } else {
        nf205.style.display = "none";
    }

    
    if (college_library.textContent.toLowerCase().includes(input)) {
        college_library.style.display = "";
    } else {
        college_library.style.display = "none";
    }

    
    if (nf208_deans_office.textContent.toLowerCase().includes(input)) {
        nf208_deans_office.style.display = "";
    } else {
        nf208_deans_office.style.display = "none";
    }

    
    if (nf209.textContent.toLowerCase().includes(input)) {
        nf209.style.display = "";
    } else {
        nf209.style.display = "none";
    }

    
    if (nf210.textContent.toLowerCase().includes(input)) {
        nf210.style.display = "";
    } else {
        nf210.style.display = "none";
    }

    
    if (nf211.textContent.toLowerCase().includes(input)) {
        nf211.style.display = "";
    } else {
        nf211.style.display = "none";
    }

    
    if (accredation_room.textContent.toLowerCase().includes(input)) {
        accredation_room.style.display = "";
    } else {
        accredation_room.style.display = "none";
    }

    
    if (mb203.textContent.toLowerCase().includes(input)) {
        mb203.style.display = "";
    } else {
        mb203.style.display = "none";
    }

    
    if (mb202.textContent.toLowerCase().includes(input)) {
        mb202.style.display = "";
    } else {
        mb202.style.display = "none";
    }

    
    if (mb201.textContent.toLowerCase().includes(input)) {
        mb201.style.display = "";
    } else {
        mb201.style.display = "none";
    }

    
    if (nb202.textContent.toLowerCase().includes(input)) {
        nb202.style.display = "";
    } else {
        nb202.style.display = "none";
    }

    
    if (nb201.textContent.toLowerCase().includes(input)) {
        nb201.style.display = "";
    } else {
        nb201.style.display = "none";
    }

    
    if (office_of_avp.textContent.toLowerCase().includes(input)) {
        office_of_avp.style.display = "";
    } else {
        office_of_avp.style.display = "none";
    }

    
    if (high_school_library.textContent.toLowerCase().includes(input)) {
        high_school_library.style.display = "";
    } else {
        high_school_library.style.display = "none";
    }

    
    if (elementary_library.textContent.toLowerCase().includes(input)) {
        elementary_library.style.display = "";
    } else {
        elementary_library.style.display = "none";
    }

    
    if (shs210.textContent.toLowerCase().includes(input)) {
        shs210.style.display = "";
    } else {
        shs210.style.display = "none";
    }

    
    if (shs209.textContent.toLowerCase().includes(input)) {
        shs209.style.display = "";
    } else {
        shs209.style.display = "none";
    }

    
    if (shs208.textContent.toLowerCase().includes(input)) {
        shs208.style.display = "";
    } else {
        shs208.style.display = "none";
    }

    
    if (shs207.textContent.toLowerCase().includes(input)) {
        shs207.style.display = "";
    } else {
        shs207.style.display = "none";
    }

    
    if (shs206.textContent.toLowerCase().includes(input)) {
        shs206.style.display = "";
    } else {
        shs206.style.display = "none";
    }

    
    if (shs205.textContent.toLowerCase().includes(input)) {
        shs205.style.display = "";
    } else {
        shs205.style.display = "none";
    }

    
    if (shs204.textContent.toLowerCase().includes(input)) {
        shs204.style.display = "";
    } else {
        shs204.style.display = "none";
    }

    
    if (shs203.textContent.toLowerCase().includes(input)) {
        shs203.style.display = "";
    } else {
        shs203.style.display = "none";
    }

    
    
    if (shs203.textContent.toLowerCase().includes(input)) {
        shs203.style.display = "";
    } else {
        shs203.style.display = "none";
    }

    
    
    if (shs202.textContent.toLowerCase().includes(input)) {
        shs202.style.display = "";
    } else {
        shs202.style.display = "none";
    }

    
    
    if (shs201.textContent.toLowerCase().includes(input)) {
        shs201.style.display = "";
    } else {
        shs201.style.display = "none";
    }

    
    
    if (ncb201.textContent.toLowerCase().includes(input)) {
        ncb201.style.display = "";
    } else {
        ncb201.style.display = "none";
    }

    
    
    if (cb201.textContent.toLowerCase().includes(input)) {
        cb201.style.display = "";
    } else {
        cb201.style.display = "none";
    }

    
    
    if (cb202.textContent.toLowerCase().includes(input)) {
        cb202.style.display = "";
    } else {
        cb202.style.display = "none";
    }

    
    
    if (cb203.textContent.toLowerCase().includes(input)) {
        cb203.style.display = "";
    } else {
        cb203.style.display = "none";
    }

    
    
    if (cb204.textContent.toLowerCase().includes(input)) {
        cb204.style.display = "";
    } else {
        cb204.style.display = "none";
    }

    
    
    if (cb205.textContent.toLowerCase().includes(input)) {
        cb205.style.display = "";
    } else {
        cb205.style.display = "none";
    }

    
    
    if (cb206.textContent.toLowerCase().includes(input)) {
        cb206.style.display = "";
    } else {
        cb206.style.display = "none";
    }

    
    
    if (cb207.textContent.toLowerCase().includes(input)) {
        cb207.style.display = "";
    } else {
        cb207.style.display = "none";
    }

    
    
    if (cb208.textContent.toLowerCase().includes(input)) {
        cb208.style.display = "";
    } else {
        cb208.style.display = "none";
    }

    
    
    if (shs203.textContent.toLowerCase().includes(input)) {
        shs203.style.display = "";
    } else {
        shs203.style.display = "none";
    }

    
    
    if (cb209.textContent.toLowerCase().includes(input)) {
        cb209.style.display = "";
    } else {
        cb209.style.display = "none";
    }

    
    
    if (cb210.textContent.toLowerCase().includes(input)) {
        cb210.style.display = "";
    } else {
        cb210.style.display = "none";
    }

    
    
    if (cb211.textContent.toLowerCase().includes(input)) {
        cb211.style.display = "";
    } else {
        cb211.style.display = "none";
    }

    




    
    if (mb303.textContent.toLowerCase().includes(input)) {
        mb303.style.display = "";
    } else {
        mb303.style.display = "none";
    }

    
    
    if (mb302.textContent.toLowerCase().includes(input)) {
        mb302.style.display = "";
    } else {
        mb302.style.display = "none";
    }

    
    
    if (mb301.textContent.toLowerCase().includes(input)) {
        mb301.style.display = "";
    } else {
        mb301.style.display = "none";
    }

    
    
    if (shs311.textContent.toLowerCase().includes(input)) {
        shs311.style.display = "";
    } else {
        shs311.style.display = "none";
    }

    
    
    if (shs310.textContent.toLowerCase().includes(input)) {
        shs310.style.display = "";
    } else {
        shs310.style.display = "none";
    }

    
    
    if (shs309.textContent.toLowerCase().includes(input)) {
        shs309.style.display = "";
    } else {
        shs309.style.display = "none";
    }

    
    
    if (shs308.textContent.toLowerCase().includes(input)) {
        shs308.style.display = "";
    } else {
        shs308.style.display = "none";
    }

    
    
    if (shs307.textContent.toLowerCase().includes(input)) {
        shs307.style.display = "";
    } else {
        shs307.style.display = "none";
    }

    
    
    if (shs306.textContent.toLowerCase().includes(input)) {
        shs306.style.display = "";
    } else {
        shs306.style.display = "none";
    }

    
    
    if (shs305.textContent.toLowerCase().includes(input)) {
        shs305.style.display = "";
    } else {
        shs305.style.display = "none";
    }

    
    
    if (shs203.textContent.toLowerCase().includes(input)) {
        shs203.style.display = "";
    } else {
        shs203.style.display = "none";
    }

    
    
    if (shs304.textContent.toLowerCase().includes(input)) {
        shs304.style.display = "";
    } else {
        shs304.style.display = "none";
    }

    
    
    if (shs303.textContent.toLowerCase().includes(input)) {
        shs303.style.display = "";
    } else {
        shs303.style.display = "none";
    }

    
    
    if (shs302.textContent.toLowerCase().includes(input)) {
        shs302.style.display = "";
    } else {
        shs302.style.display = "none";
    }

    
    
    if (shs301.textContent.toLowerCase().includes(input)) {
        shs301.style.display = "";
    } else {
        shs301.style.display = "none";
    }

    
    
    if (shs300.textContent.toLowerCase().includes(input)) {
        shs300.style.display = "";
    } else {
        shs300.style.display = "none";
    }

    
    
    if (ncb301.textContent.toLowerCase().includes(input)) {
        ncb301.style.display = "";
    } else {
        ncb301.style.display = "none";
    }

    
    
    if (cb301.textContent.toLowerCase().includes(input)) {
        cb301.style.display = "";
    } else {
        cb301.style.display = "none";
    }

    
    
    if (cb302.textContent.toLowerCase().includes(input)) {
        cb302.style.display = "";
    } else {
        cb302.style.display = "none";
    }

    
    
    if (cb303.textContent.toLowerCase().includes(input)) {
        cb303.style.display = "";
    } else {
        cb303.style.display = "none";
    }

    
    
    if (cb304.textContent.toLowerCase().includes(input)) {
        cb304.style.display = "";
    } else {
        cb304.style.display = "none";
    }

    
    
    if (cb305.textContent.toLowerCase().includes(input)) {
        cb305.style.display = "";
    } else {
        cb305.style.display = "none";
    }

    
    
    if (cb306.textContent.toLowerCase().includes(input)) {
        cb306.style.display = "";
    } else {
        cb306.style.display = "none";
    }

    
    
    if (cb307.textContent.toLowerCase().includes(input)) {
        cb307.style.display = "";
    } else {
        cb307.style.display = "none";
    }

    
    
    if (cb308.textContent.toLowerCase().includes(input)) {
        cb308.style.display = "";
    } else {
        cb308.style.display = "none";
    }

    
    
    if (cb309.textContent.toLowerCase().includes(input)) {
        cb309.style.display = "";
    } else {
        cb309.style.display = "none";
    }

    
    
    if (cb310_courtroom.textContent.toLowerCase().includes(input)) {
        cb310_courtroom.style.display = "";
    } else {
        cb310_courtroom.style.display = "none";
    }

    
    
    if (cb311_defense_tactic_room.textContent.toLowerCase().includes(input)) {
        cb311_defense_tactic_room.style.display = "";
    } else {
        cb311_defense_tactic_room.style.display = "none";
    }

    



    
    
    if (booth.textContent.toLowerCase().includes(input)) {
        booth.style.display = "";
    } else {
        booth.style.display = "none";
    }

    
    
    if (ncb401.textContent.toLowerCase().includes(input)) {
        ncb401.style.display = "";
    } else {
        ncb401.style.display = "none";
    }

    
    
    if (bench.textContent.toLowerCase().includes(input)) {
        bench.style.display = "";
    } else {
        bench.style.display = "none";
    }

    
    
    if (court.textContent.toLowerCase().includes(input)) {
        court.style.display = "";
    } else {
        court.style.display = "none";
    }

    
}



function loadRoomList() {
    const select = document.getElementById("roomSelect");
    select.innerHTML = "";

    const template = document.getElementById("searchbar");
    const rooms = template.content.querySelectorAll(".room-container div");

    rooms.forEach(room => {
        if (!room.id) return;

        const option = document.createElement("option");
        option.value = room.id;
        option.textContent = room.querySelector("p").textContent;
        select.appendChild(option);
    });
}


function applyChanges() {
    const roomId = document.getElementById("roomSelect").value;
    const newText = document.getElementById("newText").value.trim();
    const imageInput = document.getElementById("newImage");

    const templateRoom = document
        .getElementById("searchbar")
        .content
        .getElementById(roomId);

    if (!templateRoom) {
        alert("Room not found.");
        return;
    }

    
    if (newText !== "") {
        templateRoom.querySelector("p").textContent = newText;
        localStorage.setItem(roomId + "_text", newText);
    }

    
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = e => {
            templateRoom.querySelector("img").src = e.target.result;
            localStorage.setItem(roomId + "_img", e.target.result);
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    const liveRoom = document.getElementById(roomId);
    if (liveRoom) {
        if (newText !== "") {
            liveRoom.querySelector("p").textContent = newText;
        }
        if (imageInput.files.length > 0) {
            const savedImg = localStorage.getItem(roomId + "_img");
            if (savedImg) liveRoom.querySelector("img").src = savedImg;
        }
    }

    alert("Changes saved!");
}


window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".room-container div").forEach(div => {
        const id = div.id;
        const savedText = localStorage.getItem(id + "_text");
        const savedImg = localStorage.getItem(id + "_img");

        if (savedText) div.querySelector("p").textContent = savedText;
        if (savedImg) div.querySelector("img").src = savedImg;
    });
});

function applySavedChanges(container = document) {
    container.querySelectorAll(".room-container div").forEach(room => {
        const savedText = localStorage.getItem(room.id + "_text");
        const savedImg = localStorage.getItem(room.id + "_img");

        if (savedText) room.querySelector("p").textContent = savedText;
        if (savedImg) room.querySelector("img").src = savedImg;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    applySavedChanges();
});

applySavedChanges(document);
