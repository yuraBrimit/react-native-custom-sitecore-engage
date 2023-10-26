export declare const DEFAULT_COOKIE_EXPIRY_DAYS = 730;
export declare const DAILY_SECONDS = 86400;
export declare const API_VERSION = "v1.2";
export declare const UTM_PREFIX = "utm_";
export declare enum EndPoint {
    Events = "events",
    Browser = "browser",
    Batches = "batches"
}
export declare enum EventTypes {
    Add = "ADD",
    AddConsumers = "ADD_CONSUMERS",
    AddContacts = "ADD_CONTACTS",
    AddProduct = "ADD_PRODUCT",
    Calculator = "CALCULATOR",
    CampaignTracking = "CAMPAIGN_TRACKING",
    ClearCart = "CLEAR_CART",
    Click = "CLICK",
    Chat = "CHAT",
    Checkout = "CHECKOUT",
    Comment = "COMMENT",
    Confirm = "CONFIRM",
    ContactRequest = "CONTACT_REQUEST",
    Consumers = "CONSUMERS",
    Email = "EMAIL",
    Login = "LOGIN",
    Identity = "IDENTITY",
    Notification = "NOTIFICATION",
    OrderUpdate = "ORDER_UPDATE",
    Payment = "PAYMENT",
    Purchase = "PURCHASE",
    PnrRecord = "PNR_RECORD",
    Sms = "SMS",
    Subscription = "SUBSCRIPTION",
    Search = "SEARCH",
    Select = "SELECT",
    Trigger = "TRIGGER",
    TripSummary = "TRIP_SUMMARY",
    Update = "UPDATE",
    View = "VIEW"
}
