import PageWithBackButton from "../../_components/PageWithBackButton";

export default function NewProductPage() {
  return (
    <PageWithBackButton
    backButtonHref="/dashboard/products"
    pageTitle="New Product"
  >
    Inner
  </PageWithBackButton>
  )
}
