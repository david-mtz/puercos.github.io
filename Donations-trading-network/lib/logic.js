/**
 * Buy card transaction
 * @param {org.example.biznet.TradeCard} trade
 * @transaction
 */
async function buyCard(e){if(e.dona.forTrade)return e.dona.owner=e.newOwner,getAssetRegistry("org.example.biznet.TradingCard").then(r=>r.update(e.dona)).then(()=>{let r=getFactory().newEvent("org.example.biznet","TradeNotification");r.dona=e.dona,emit(r)})}