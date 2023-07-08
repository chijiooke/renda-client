export type InboundRequest = {
    inboundId: string;
    dateCreated: string;
    timeCreated: string;
    shipment: {
      // ...
      inventoryItems: [
        {
          // ...
          deliveryDetails: {
            // ...
            pickupLocation: string;
            deliveryBy: string;
            // ...
          };
          // ...
          storageFacilityId: string;
          storageFacility: null;
        }
      ];
      // ...
    };
  
    storageFacility: string;
    storageFacilityId: string;
    deliveryBy: string;
    status: string;
  };