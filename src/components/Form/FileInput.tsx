import React, { useRef, useState } from 'react';

type Props = {
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
};

export function FileInput({
  name,
  id,
  label,
  placeholder = 'Selecione uma foto',
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previews, setPreviews] = useState<{ name: string; image: any }[]>([]);

  function renderImage(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject();
      };
    });
  }

  function handleInputChange(values: React.ChangeEvent<HTMLInputElement>) {
    setPreviews([]);
    const files = values.target.files || [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      renderImage(file).then((image: any) => {
        setPreviews((prev) => {
          const copy = [...prev];
          copy.push({ name: file.name, image });
          return copy;
        });
      });
    }
  }

  return (
    <>
      {label && <span className="text-sm text-black pb-2">{label}</span>}
      <label
        htmlFor={name}
        className="w-full py-20 bg-white border border-dashed hover:border-brandPrimary/200 active:border-brandPrimary/300 focus:ring-2 focus:ring-brandPrimary/100 placeholder:text-gray-500 rounded-[4px] flex flex-col items-center justify-center cursor-pointer"
      >
        <span className="text-gray-600 text-lg">{placeholder}</span>
        {previews?.length >= 0 && (
          <div className="w-full flex flex-col gap-2">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-start px-4 gap-2"
              >
                <img
                  src={preview.image}
                  alt={preview.name}
                  className="w-[60px] h-[60px] bg-contain bg-no-repeat rounded-md"
                />
                <span className="text-gray-500 text-sm">{preview.name}</span>
              </div>
            ))}
          </div>
        )}
      </label>
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="file"
        name={name}
        id={id}
        className="hidden"
        multiple
        accept="image/jpg, image/jpeg, image/png"
      />
    </>
  );
}
