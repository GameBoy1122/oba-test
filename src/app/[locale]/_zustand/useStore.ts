import { useAppStore } from "@/zustand/useAppStore";
import { create, StateCreator } from "zustand";

export type ActiveTab = "tab1" | "tab2" | "tab3" | "tab4" | "tab5";

type LandingState = {
  activeTab: ActiveTab;
};

type LandingAction = {
  readCard: () => Promise<void>;
  dopaConsent: () => Promise<void>;
  getDopaConsentShortContent: () => Promise<void>;
};

type LandingStore = LandingAction & LandingState;

export const useLandingStore = create<LandingStore>(() => ({
  // initial state
  activeTab: "tab1",
  // actions
  readCard: async () => {
    // this.sharedStorage.set("tempReasonOefCompareName", null);
    // this.sharedStorage.set("tmgMembership", null);
    // this.sharedStorage.set("companyTaxId", null);
    // this.sharedStorage.set("isExistingCustomerDsa", false);
    // this.sharedStorage.set("lastKycScore", null);
    // this.sharedStorage.set("debitCards", null);
    // this.sharedStorage.set("smsSelector", null);
    // this.sharedStorage.set("alertValidateMultiLogin", false);
    // this.sharedStorage.set("isAllowLogin", true);
    // this.sharedStorage.set("isRemoveSCBSandOpenSaving", false);
    // this.sharedStorage.set("chaiyoCompNameEn", "Auto X");
    // this.sharedStorage.set("chaiyoCompNameTh", "บริษัท ออโต้ เอกซ์ จำกัด");

    // const user = this.sharedStorage.get("scbUser");
    const user = useAppStore.getState().userInfo;

    // const permissions = this.sharedStorage.get("scbUser").permissions;
    const permissions = useAppStore.getState().userInfo?.permissions;

    // //IOVSIP FE-FT-MAIN: IPRO NOT SHOW privacyNotice
    // if (permissions.consent.includes("privacyNotice")) {
    //   await this.privacyNotice();
    // }
    // let dopaConsent = await this.dopaConsent();
    // if (dopaConsent === "Y") {
    //   const caseInfo = await this.customerRetrievalFlow.start();
    //   this.tjLogControllerApi.add(
    //     { txnCode: "TXN106" },
    //     { ignoreLoadingBar: true }
    //   );
    //   this.chaiyoLoanDetail = await this.chaiyoAppService.getChaiyoLoanDetail();
    //   if (caseInfo != null) {
    //     if (this.appControl.name === "ONBD") {
    //       if (this.chaiyoAppService.isChaiyoUser()) {
    //         if (!this.chaiyoLoanDetail.loanDetails.loanAccountNo) {
    //           this.chaiyoLoanDetail.loanDetails.loanAccountNo =
    //             this.chaiyoLoanDetail.loanDetails.revolvingAccountNo;
    //         }
    //         caseInfo.additionalInfo.chaiyoLoanDetail = this.chaiyoLoanDetail;
    //       }
    //       caseInfo.additionalInfo.isFCD = !!this.sharedStorage.get("FCD");
    //     }
    //     this.caseService.store(caseInfo);
    //     if (this.caseService.getData("LeadsVerification") === "Y") {
    //       await this.leadsService.submit(caseInfo);
    //     } else {
    //       await this.appControl.start(caseInfo);
    //     }
    //     const skipFastTrackForNormalUser =
    //       permissions.additionalRoles &&
    //       !permissions.additionalRoles.includes("service_only") &&
    //       permissions.products &&
    //       !permissions.products.some((it) => it.startsWith("IV"));
    //     const skipFastTrackForChaiyoUserOpenAccountFlow =
    //       user.roles.includes("chaiyo") &&
    //       this.chaiyoLoanDetail &&
    //       (this.chaiyoLoanDetail.loanType ===
    //         ChaiyoConstants.CHAIYO_LOAN_TYPE_NORMAL ||
    //         this.chaiyoLoanDetail.loanType ===
    //           ChaiyoConstants.CHAIYO_LOAN_TYPE_TRUCK);
    //     const skipFastTrackForFCDFlow = this.caseService.isFCD();
    //     // FE-FT-MAIN:
    //     // skip track select and questionair
    //     // Use in iOnboard only when check additionalRoles.
    //     if (skipFastTrackForNormalUser || skipFastTrackForFCDFlow) {
    //       console.log("Skiped track and questionair to product select");
    //       const answers: number[] = [0];
    //       this.productService.start(caseInfo, answers);
    //       this.routing.goto("scb-widget-product-select");
    //     } else if (skipFastTrackForChaiyoUserOpenAccountFlow) {
    //       console.log("Skipped track and questionair for chaiyo open account");
    //       const answers: number[] = [0];
    //       this.productService.start(caseInfo, answers);
    //       this.routing.goto("scb-widget-product-select");
    //     } else {
    //       console.log("Not skip track and questionair");
    //       this.routing.next();
    //     }
    //   }
    // }
  },
  dopaConsent: async () => {
    // let shortContent = await this.getDopaConsentShortContent();
    // return await this.$uibModal.open({
    //   template: require("../dopa-consent-popup/dopa-consent-popup.html"),
    //   controller: require("../dopa-consent-popup/dopa-consent-popup"),
    //   controllerAs: "$ctrl",
    //   backdrop: "static",
    //   windowClass: "dopa-consent-popup-width",
    //   resolve: {
    //     shortConsentContent: () => shortContent,
    //   },
    // }).result;
  },
  getDopaConsentShortContent: async () => {
    // let consentReq = [
    //   {
    //     consentType: "006",
    //     vendor: "SCB",
    //   },
    // ] as models.ConsentContentRequest[];
    // let consentResp = await this.util.retry(() =>
    //   this.consentControllerApi.initiateConsentContent(consentReq)
    // );
    // return consentResp[0];
  },
}));

// use zustand store instead of react useState
export const setActiveTab = (activeTab: ActiveTab) => {
  useLandingStore.setState({ activeTab });
};
