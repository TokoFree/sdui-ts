import { DivContainer, DivImage, DivText, divCard, reference, rewriteRefs, template, templateHelper } from "@divkitframework/jsonbuilder";

const templates = {
    lego: new DivContainer({
        items: [
            template("header", {
                text: reference("title")
            })
        ]
    }),
    header: new DivText({
        text: reference("title"),
        paddings: {
            top: 10, 
            bottom: 10, 
            left: 10, 
            right: 10,
        },
        font_size: 24,
    }),
    single_image: new DivImage({
        image_url: reference("image_url"),
        paddings: {
            top: reference("padding_top"),
            bottom: reference("padding_bottom"),
            left: reference("padding_left"),
            right: reference("padding_right")
        }
    }),
    four_lego: new DivContainer({
        items: [
            new DivContainer({
                items: [
                    new DivContainer({
                        items: [
                            template("single_image", {
                                image_url: reference("image_url_1"),
                                padding_right: reference("padding_right"),
                            }),
                            template("single_image", {
                                image_url: reference("image_url_2"),
                                padding_left: reference("padding_left"),
                            }),
                        ],
                        orientation: "horizontal",
                        
                    }),
                    new DivContainer({
                        items: [
                            template("single_image", {
                                image_url: reference("image_url_3"),
                                padding_right: reference("padding_right"),
                            }),
                            template("single_image", {
                                image_url: reference("image_url_4"),
                                padding_left: reference("padding_left"),
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

const tHelper = templateHelper(templates);

console.log(JSON.stringify(
    divCard(rewriteRefs(templates), {
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
      ],
    }
  ), null, 2));