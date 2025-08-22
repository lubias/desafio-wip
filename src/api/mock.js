import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 500 });

const mapToOptions = (arr) =>
    arr.map((obj, index) => {
        const key = Object.keys(obj)[0];
        return { value: key, label: obj[key], key: `${key}-${index}` };
    });

mock.onGet("/api/create-articles").reply(200, {
    success: true,
    data: ["PM", "PK", "AC", "KS"].map((item, idx) => ({ value: item, label: item, key: `type-${idx}` })),
});

mock.onGet("/api/create-articles/PK").reply(200, {
    success: true,
    customer: mapToOptions([{ "001": "WIP" }, { "025": "IPCA" }]),
    certification: mapToOptions([{ "001": "GOTS" }, { "002": "BLUE" }, { "003": "GREEN" }]),
    unit: mapToOptions([{ "001": "UN" }, { "002": "PK" }, { "003": "PAIR" }]),
    currency: mapToOptions([{ "001": "EUR" }, { "002": "USD" }, { "003": "JPY" }, { "004": "GBP" }]),
    sustComp: mapToOptions([{ "001": "ECO" }, { "002": "WOOL" }, { "003": "GRTXT" }])
});

mock.onGet("/api/brand/001").reply(200, { success: true, data: mapToOptions([{ "001": "WIPTech Pro" }, { "253": "WIPTech Ultra" }, { "563": "WIPTech Standard" }]) });
mock.onGet("/api/brand/025").reply(200, { success: true, data: mapToOptions([{ "009": "IPCA 1" }, { "632": "IPCA 2" }]) });

mock.onGet("/api/color/001").reply(200, { success: true, data: mapToOptions([{ "002": "Pure Red" }, { "006": "Soft White" }, { "009": "Sunset Orange" }]) });
mock.onGet("/api/color/253").reply(200, { success: true, data: mapToOptions([{ "025": "Pure Red" }, { "085": "Soft White" }]) });
mock.onGet("/api/color/563").reply(200, { success: true, data: mapToOptions([{ "001": "Black" }, { "002": "White" }]) });
mock.onGet("/api/color/009").reply(200, { success: true, data: mapToOptions([{ "001": "Green" }, { "002": "White" }]) });
mock.onGet("/api/color/632").reply(200, { success: true, data: mapToOptions([{ "001": "Green" }, { "002": "White" }]) });

mock.onGet("/api/size").reply(200, { success: true, data: mapToOptions([{ "041": "41" }, { "042": "42" }, { "043": "43" }, { "044": "44" }]) });

mock.onPost("/api/save").reply((config) => {
    const data = JSON.parse(config.data);
    console.log("Dados gravados no mock:", data);
    return [200, data];
});

export default axios;
