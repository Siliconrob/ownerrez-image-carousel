const Joi = require("joi");
const appHelper = require("../src/helpers");

module.exports = [
  {
    method: "GET",
    path: "/propertyImages",
    options: {
      description: "Get all Properties images",
      notes: "Returns all property images",
      tags: ["api", "Properties"],
    },
    handler: async (request, h) => {
      return await appHelper.GeneralErrorHandlerFn(async () => {
        const response = await appHelper.Get(`${appHelper.BaseUrl}/properties`);

        return response.body.items
          .filter((z) => z.hasOwnProperty("thumbnail_url_medium"))
          .map((k) => k.thumbnail_url_medium);
      });
    },
  },
];
