// Mapping of step names to colors.
var colors = {
"HUMANI": "#023858",
"WEE": "#00441b",
"FNS": "#7f0000",
"ROLES": "#3f007d",
"CIND22": "#045a8d",
"CIND4": "#0570b0",
"CIND5": "#3690c0",
"TD1": "#006d2c",
"TD3": "#238b45",
"CIND16": "#41ab5d",
"CIND17": "#74c476",
"CIND18": "#a1d99b",
"CIND13": "#b30000",
"CIND14": "#d7301f",
"CIND15": "#ef6548",
"CIND21": "#fc8d59",
"CIND1": "#54278f",
"CIND19": "#6a51a3",
"CIND20": "#807dba",
"CIND23": "#9e9ac8",
"CIND24": "#bcbddc",
"CIND25": "#dadaeb",
"ND#22": "#74a9cf",
"ND#4": "#74a9cf",
"ND#5": "#74a9cf",
"TD#1": "#c7e9c0",
"TD#3": "#c7e9c0",
"PL#16": "#c7e9c0",
"PNF#16": "#c7e9c0",
"PROLEMPA#16": "#c7e9c0",
"PDR#17": "#c7e9c0",
"PNF#17": "#c7e9c0",
"PROLEMPA#17": "#c7e9c0",
"PNF#18": "#c7e9c0",
"ACS#13": "#fdbb84",
"PL#13": "#fdbb84",
"PNF#13": "#fdbb84",
"ACS#14": "#fdbb84",
"HGSA#14": "#fdbb84",
"PL#14": "#fdbb84",
"PNF#14": "#fdbb84",
"ACS#15": "#fdbb84",
"DPCO#15": "#fdbb84",
"PL#15": "#fdbb84",
"PNF#15": "#fdbb84",
"ACS#21": "#fdbb84",
"DPCO#21": "#fdbb84",
"PDR#21": "#fdbb84",
"PL#21": "#fdbb84",
"PNF#21": "#fdbb84",
"SG#21": "#fdbb84",
"PDR#1": "#efedf5",
"PNF#1": "#efedf5",
"PDR#19": "#efedf5",
"PNF#19": "#efedf5",
"PROLEMPA#19": "#efedf5",
"SG#19": "#efedf5",
"PDR#20": "#efedf5",
"PL#20": "#efedf5",
"PROLEMPA#20": "#efedf5",
"SG#20": "#efedf5",
"PNF#23": "#efedf5",
"TD#24": "#efedf5",
"PNF#25": "#efedf5",
"PROLEMPA#25": "#efedf5",
"HNIND1": "#00ffff",
"HNIND2": "#00ffff",
"HNIND3": "#00ffff",
"HNIND4": "#1aff66",
"HNIND5": "#1aff66",
"HNIND6": "#1aff66",
"HNIND7": "#1aff66",
"HNIND8": "#1aff66",
"HNIND9": "#1aff66",
"HNIND10": "#1aff66",
"HNIND11": "#1aff66",
"HNIND12": "#1aff66",
"HNIND13": "#1aff66",
"HNIND14": "#1aff66",
"HNIND15": "#1aff66",
"HNIND16": "#1aff66",
"HNIND17": "#1aff66",
"HNIND18": "#1aff66",
"HNIND19": "#1aff66",
"HNIND20": "#1aff66",
"HNIND21": "#1aff66",
"HNIND22": "#1aff66",
"HNIND23": "#1aff66",
"HNIND24": "#1aff66",
"HNIND25": "#ffd11a",
"HNIND26": "#ffd11a",
"HNIND27": "#ffd11a",
"HNIND28": "#ffd11a",
"HNIND29": "#ffd11a",
"HNIND30": "#ffd11a",
"HNIND31": "#ffd11a",
"HNIND32": "#ffd11a",
"HNIND33": "#ffd11a",
"HNIND34": "#ffd11a",
"HNIND35": "#ffd11a",
"HNIND36": "#ffd11a",
"HNIND37": "#ffd11a",
"HNIND38": "#ffd11a",
"HNIND39": "#ffd11a",
"HNIND40": "#ffd11a",
"HNIND41": "#ffd11a",
"HNIND42": "#ffd11a",
"HNIND43": "#ffd11a",
"HNIND44": "#ffd11a",
"HNIND45": "#ffd11a",
"HNIND46": "#ffd11a",
"HNIND47": "#ffd11a",
"HNIND48": "#ffd11a",
"HNIND49": "#ffd11a",
"HNIND50": "#ffd11a",
"HNIND51": "#ffd11a",
"HNIND52": "#ffd11a",
"HNIND53": "#ffd11a",
"HNIND54": "#ffd11a",
"HNIND55": "#ffd11a",
"HNIND56": "#ffd11a",
"HNIND57": "#ffd11a",
"HNIND58": "#ffd11a",
"HNIND59": "#ffd11a",
"HNIND60": "#ffd11a",
"HNIND61": "#ffd11a",
"HNIND62": "#ffd11a",
"HNIND63": "#ffd11a",
"HNIND64": "#ffd11a",
"HNIND65": "#ffd11a",
"HNIND66": "#ffd11a",
"HNIND67": "#ffd11a",
"HNIND68": "#ffd11a",
"HNIND69": "#ffd11a",
"HNIND70": "#ffd11a",
"HNIND71": "#ffd11a",
"HNIND72": "#ffd11a",
"HNIND73": "#ffd11a",
"HNIND74": "#ffd11a",
"HNIND75": "#ffd11a",
"HNIND76": "#ffd11a",
"HNIND77": "#ffd11a",
"HNIND78": "#ffd11a",
"HNIND79": "#ffd11a",
"HNIND80": "#ffd11a",
"HNIND81": "#ffd11a",
"HNIND82": "#b366ff",
"HNIND83": "#b366ff",
"HNIND84": "#b366ff",
"HNIND85": "#b366ff",
"HNIND86": "#b366ff",
"HNIND87": "#b366ff",
"HNIND88": "#b366ff",
"HNIND89": "#b366ff",
"HNIND90": "#b366ff",
"HNIND91": "#b366ff",
"HNIND92": "#b366ff",
"HNIND93": "#b366ff",
"HNIND94": "#b366ff",
"HNIND95": "#b366ff",
"HNIND96": "#b366ff",
"HNIND97": "#b366ff",
"HNIND98": "#b366ff",
"HNIND99": "#b366ff",
"HNIND100": "#b366ff",
"HNIND101": "#b366ff",
"HNIND102": "#b366ff",
"HNIND103": "#b366ff",
"HNIND104": "#b366ff",
"HNIND105": "#b366ff",
"HNIND106": "#b366ff",
"HNIND107": "#b366ff"
};