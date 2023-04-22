export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.abs(Number(now) - Number(date));
  const diffInHours = diff / (1000 * 60 * 60);

  if (diffInHours < 24) {
    const diffInMinutes = Math.round(diff / (1000 * 60));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    if (diffInHours > 0) {
      return `${diffInHours}h ago`;
    } else {
      return `${diffInMinutes}m ago`;
    }
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  }
}
