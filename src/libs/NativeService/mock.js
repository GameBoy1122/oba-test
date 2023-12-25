
const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

if (typeof window !== "undefined") {
  window.Plugin = {
    NationalID: {
      readThaiCard(fn) {
        // GET from json customer-image.json
        fn({
          status: -1,
          cardInfo: JSON.stringify({
            address: {
              thaiAddressAmphur: "",
              thaiAddressDistrict: "",
              thaiAddressMoo: "",
              thaiAddressNumber: "",
              thaiAddressProvince: "",
              thaiAddressSoi: "",
              thaiAddressThanon: "",
              thaiAddressTrok: "",
              zipCode: "",
            },
            countryOfIssue: "",
            dob: "",
            docNo: "",
            docType: "",
            engFirstName: "",
            engLastName: "",
            engMiddleName: "",
            engTitle: "",
            expDate: "",
            genderCode: "",
            issueDate: "",
            issueRequestNo: "",
            laserCode: "",
            manualKeyIn: false,
            nationalityCode: "",
            oldDocNo: "",
            photo: "",
            smartcardImage: "",
            thaiFirstName: "",
            thaiLastName: "",
            thaiMiddleName: "",
            thaiTitle: "",
          })
        })
      }
    },
    CaptivaDocScanner: {
      start(fn) {
        fn({
          status: '1'
        })
      }
    },
    FacialID: {
      async staticFaceOverlay() {
        // GET from json customer-photo.json
        return ''
      }
    },
    Utilities: {
      deviceDetails(fn) {
        fn({
          deviceUUID: "web",
          appVersion: "---IPA-VERSION---",
          deviceName: "SCB CASA BRANCH IPAD 0111",
          deviceIP: "0.0.0.0"
        })
      },
      clearWebViewCache(fn) {
        fn({
          value: "existing cache OK!"
        })
      }
    }
  }
}
