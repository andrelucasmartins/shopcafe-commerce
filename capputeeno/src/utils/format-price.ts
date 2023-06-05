export function formatPrice(value: number) {
  const formattedValue = value / 100;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(formattedValue);
}
