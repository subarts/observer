import React from "react";
import axios from "axios";

const GetBonds = async function getBonds() {
  const response = await axios({
    method: "post",
    url:
      "https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds",

    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer t.4kDIQbLtHt1ufbZhoW3d7ivHD9kKOFPXzmKXQLxEchyxJhj5JoRRvykSvll1BdYNKG662QXfP-v1PAfzaj1ZsQ",
    },
    data: { instrumentStatus: "INSTRUMENT_STATUS_UNSPECIFIED" },
  });

  return response;
};

//link https://www.tinkoff.ru/invest/bonds/RU000A101UW4?utm_source=security_share for moblie
// link  url: "https://www.tinkoff.ru/invest/bonds/RU000A103Q08/" for PC
export default GetBonds;
