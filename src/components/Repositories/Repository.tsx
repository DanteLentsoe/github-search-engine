import React from "react";
import { Title, RepoContainer } from "./styles";

// repo types
type Repo = {
  repo: {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    allow_forking: boolean;
    archive_url: string;
    archived: boolean;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    clone_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    created_at: string;
    default_branch: string;
    deployments_url: string;
    description: string;
    disabled: boolean;
    downloads_url: string;
    events_url: string;
    fork: boolean;
    forks: number;
    forks_count: number;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    has_downloads: boolean;
    has_issues: boolean;
    has_pages: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    homepage: null | undefined | string;
    hooks_url: string;
    html_url: string;
    is_template: boolean;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    language: string;
    languages_url: string;
    license: any;
    merges_url: string;
    milestones_url: string;
    mirror_url: null | string | undefined;
    notifications_url: string;
    open_issues: number;
    open_issues_count: number;
    owner: any;
    pushed_at: string;
    releases_url: string;
    size: number;
    ssh_url: string;
    stargazers_count: number;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    svn_url: string;
    tags_url: string;
    teams_url: string;
    topics: any;
    trees_url: string;
    updated_at: string;
    url: string;
    visibility: string;
    watchers: number;
    watchers_count: number;
  };
  user: any;
};
const Repository = ({ repo }: Repo) => (
  <RepoContainer>
    <div>
      <Title>
        <i className="fa fa-book pr-1" />
        <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{repo.name}</span>
        </a>
      </Title>
      <span className="description">{repo.description}</span>
    </div>
    <div className="d-flex">
      <div className="subitem">
        <i className="fa fa-code pr-1" />
        <span>{repo.language}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-star pr-1" />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-code-fork pr-1" />
        <span>{repo.forks_count}</span>
      </div>
    </div>
  </RepoContainer>
);

export default Repository;
