/**
 *
 *
 * @export
 * @class CPreparedExpenses 预付费用
 * - 未来会收到购买的资产 => 计资产
 * - 但是会在incomeSheet上计 费用
 * - cash减少 Asset↓, => 需要PreparedExpenses↑
 * - dubble entry中,Dr(贷方): preparedExpenses,Cr(借方): cash
 */
export class CPreparedExpenses {

}