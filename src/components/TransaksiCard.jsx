import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import namaHari from "../constant/namaHari";

function TransaksiCard({ transaksi }) {
  return (
    <Link
      to={`/transaksi/edit/${transaksi.id}`}
      key={transaksi.id}
      className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all flex gap-4 items-center"
    >
      <div
        className={`p-3 rounded-full ${transaksi.category.color} flex items-center justify-center`}
      >
        <Icon icon={transaksi.category.icon} className="text-white text-xl" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold">
          {transaksi.type === "income" ? "Pendapatan" : "Pengeluaran"}
        </div>
        <div className="text-xs text-gray-500">
          {namaHari[new Date(transaksi.transaction_date).getDay()]},{" "}
          {transaksi.transaction_date}
        </div>
      </div>
      <div
        className={`text-sm font-bold ${
          transaksi.type === "income" ? "text-green-600" : "text-red-600"
        }`}
      >
        {transaksi.type === "income" ? "" : "-"}
        Rp {transaksi.amount.toLocaleString()}
      </div>
    </Link>
  );
}

export default TransaksiCard;
