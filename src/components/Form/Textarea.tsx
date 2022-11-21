type Props = {
  rows?: number;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
};

export function Textarea({ rows = 5, name, id, label, placeholder }: Props) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-sm text-black">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full bg-white p-2 border border-gray-200 rounded-[4px] outline-none hover:border-brandPrimary/200 active:border-brandPrimary/300 focus:ring-2 focus:ring-brandPrimary/100 placeholder:text-gray-500"
      />
    </>
  );
}
