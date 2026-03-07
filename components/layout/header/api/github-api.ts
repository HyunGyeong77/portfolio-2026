type User = {
  public_repos: string
  followers: string
}

export const getGithubUser = async (): Promise<User> => {
  const res = await fetch("https://api.github.com/users/hyungyeong77");
  if(!res.ok) throw new Error("불러오기 실패");

  const data = await res.json();

  return {
    public_repos: data.public_repos,
    followers: data.followers
  }
}