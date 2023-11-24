"use strict";
exports.__esModule = true;
var jsonbuilder_1 = require("@divkitframework/jsonbuilder");
var templates = {
    lego: new jsonbuilder_1.DivContainer({
        items: [
            (0, jsonbuilder_1.template)("header", {
                text: (0, jsonbuilder_1.reference)("title")
            })
        ]
    }),
    header: new jsonbuilder_1.DivText({
        text: (0, jsonbuilder_1.reference)("title"),
        paddings: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        },
        font_size: 24
    }),
    single_image: new jsonbuilder_1.DivImage({
        image_url: (0, jsonbuilder_1.reference)("image_url"),
        paddings: {
            top: (0, jsonbuilder_1.reference)("padding_top"),
            bottom: (0, jsonbuilder_1.reference)("padding_bottom"),
            left: (0, jsonbuilder_1.reference)("padding_left"),
            right: (0, jsonbuilder_1.reference)("padding_right")
        }
    }),
    four_lego: new jsonbuilder_1.DivContainer({
        items: [
            new jsonbuilder_1.DivContainer({
                items: [
                    new jsonbuilder_1.DivContainer({
                        items: [
                            (0, jsonbuilder_1.template)("single_image", {
                                image_url: (0, jsonbuilder_1.reference)("image_url_1"),
                                padding_right: (0, jsonbuilder_1.reference)("padding_right")
                            }),
                            (0, jsonbuilder_1.template)("single_image", {
                                image_url: (0, jsonbuilder_1.reference)("image_url_2"),
                                padding_left: (0, jsonbuilder_1.reference)("padding_left")
                            }),
                        ],
                        orientation: "horizontal"
                    }),
                    new jsonbuilder_1.DivContainer({
                        items: [
                            (0, jsonbuilder_1.template)("single_image", {
                                image_url: (0, jsonbuilder_1.reference)("image_url_3"),
                                padding_right: (0, jsonbuilder_1.reference)("padding_right")
                            }),
                            (0, jsonbuilder_1.template)("single_image", {
                                image_url: (0, jsonbuilder_1.reference)("image_url_4"),
                                padding_left: (0, jsonbuilder_1.reference)("padding_left")
                            }),
                        ],
                        orientation: "horizontal"
                    }),
                ],
                orientation: "vertical"
            })
        ]
    })
};
var tHelper = (0, jsonbuilder_1.templateHelper)(templates);
console.log(JSON.stringify((0, jsonbuilder_1.divCard)((0, jsonbuilder_1.rewriteRefs)(templates), {
    log_id: 'sample_card',
    states: [
        {
            state_id: 0,
            div: tHelper.four_lego({
                "image_url_1": "https://habrastorage.org/r/w32/getpro/habr/avatars/fc3/f8c/b5f/fc3f8cb5ff62a37139359296fcb2626a.jpg",
                "image_url_2": "https://habrastorage.org/r/w32/getpro/habr/avatars/fc3/f8c/b5f/fc3f8cb5ff62a37139359296fcb2626a.jpg",
                "image_url_3": "https://habrastorage.org/r/w32/getpro/habr/avatars/fc3/f8c/b5f/fc3f8cb5ff62a37139359296fcb2626a.jpg",
                "image_url_4": "https://habrastorage.org/r/w32/getpro/habr/avatars/fc3/f8c/b5f/fc3f8cb5ff62a37139359296fcb2626a.jpg",
                padding_right: 4,
                padding_top: 0,
                padding_bottom: 0,
                padding_left: 4
            })
        },
    ]
}), null, 2));
