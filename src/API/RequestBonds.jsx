import React from "react";
import axios from "axios";
export default class PostServise {
  static async getBonds(limit = 10, page = 1) {
    const response = await axios({
      method: "post",
      url:
        "https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
      data: { instrumentStatus: "INSTRUMENT_STATUS_UNSPECIFIED" },
    });
    return response;
  }
}
