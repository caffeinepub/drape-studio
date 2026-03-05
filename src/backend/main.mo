import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Int "mo:core/Int";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    location : Text;
    requirement : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let inquiries = Map.empty<Time.Time, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, location : Text, requirement : Text) : async () {
    let newInquiry : Inquiry = {
      name;
      phone;
      location;
      requirement;
      timestamp = Time.now();
    };
    inquiries.add(newInquiry.timestamp, newInquiry);
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    let iter = inquiries.values();
    iter.toArray().sort();
  };
};
