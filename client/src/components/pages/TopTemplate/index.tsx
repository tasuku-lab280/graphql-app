import Link from "next/link";

import BaseLayout from "../../layouts/BaseLayout";

const TopTemplate = () => {
  return (
    <BaseLayout>
      <Link href="article/1">記事詳細</Link>
    </BaseLayout>
  );
};

export default TopTemplate;
