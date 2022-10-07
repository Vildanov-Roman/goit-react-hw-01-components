export const User = ( username, tag, location, avatar, stats ) => {
    return <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">5603</span>
      </li>
      <li>
        <span class="label">{stats.views}</span>
        <span class="quantity">4827</span>
      </li>
      <li>
        <span class="label">{stats.likes}</span>
        <span class="quantity">1308</span>
      </li>
    </ul>
  </div>
}