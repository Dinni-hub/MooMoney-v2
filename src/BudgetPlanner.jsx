import { useEffect, useState } from "react";

const STORAGE_KEY = "moo-money-budget-data";

export default function BudgetPlanner() {
  const [records, setRecords] = useState([]);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");

  // ambil data dari device
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  // simpan ke device
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const addRecord = () => {
    if (!note || !amount) return;

    setRecords([
      ...records,
      {
        id: Date.now(),
        note,
        amount: Number(amount),
      },
    ]);

    setNote("");
    setAmount("");
  };

  const total = records.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div style={{ marginTop: 32 }}>
      <h2>Catatan Keuangan</h2>

      <div style={{ marginBottom: 12 }}>
        <input
          placeholder="Keterangan"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <input
          type="number"
          placeholder="Nominal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button onClick={addRecord}>Tambah</button>

      <ul style={{ marginTop: 16 }}>
        {records.map((r) => (
          <li key={r.id}>
            {r.note} — Rp {r.amount.toLocaleString()}
          </li>
        ))}
      </ul>

      <strong>Total: Rp {total.toLocaleString()}</strong>
    </div>
  );
}
