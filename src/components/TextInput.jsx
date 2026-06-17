export default function TextInput({ label, type, placeholder }) {
  return (
    <div>
      <label className="mb-2 block font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded border border-slate-300 bg-white px-4 py-3 outline-none placeholder:text-slate-400"
      />
    </div>
  );
}