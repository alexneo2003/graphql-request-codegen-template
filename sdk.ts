import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  owner: User;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<CompanyUser>>;
};

export type CompanyUser = {
  __typename?: 'CompanyUser';
  isReadOnly: Scalars['Boolean'];
  role: ECompanyRole;
  user: User;
};

export type CompanyUserInput = {
  isReadOnly: Scalars['Boolean'];
  role: ECompanyRole;
  user: Scalars['ID'];
};

export type CreateCompanyDto = {
  title: Scalars['ID'];
};

export type CreateProjectDto = {
  company: Scalars['ID'];
  owner?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
  users: Array<ProjectUserInput>;
};

export type CreateSuiteDto = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateTestDto = {
  description?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Array<InputMaybe<TestStepInput>>>;
  title: Scalars['String'];
};

export type CreateUserDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export enum ECompanyRole {
  Manager = 'MANAGER',
  Owner = 'OWNER',
  User = 'USER'
}

export enum EProjectRole {
  Manager = 'MANAGER',
  Owner = 'OWNER',
  User = 'USER'
}

export type LogInDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createProject: Project;
  createSuite: Suite;
  createTest: Test;
  createUser: User;
  deleteSuite: Scalars['Boolean'];
  deleteTest: Scalars['Boolean'];
  signIn: TokenInfoDto;
  updateCompany: Company;
  updateSuite: Suite;
  updateTest: Test;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyDto;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectDto;
};


export type MutationCreateSuiteArgs = {
  input: CreateSuiteDto;
};


export type MutationCreateTestArgs = {
  input: CreateTestDto;
};


export type MutationCreateUserArgs = {
  input: CreateUserDto;
};


export type MutationDeleteSuiteArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteTestArgs = {
  _id: Scalars['ID'];
};


export type MutationSignInArgs = {
  input: LogInDto;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyDto;
};


export type MutationUpdateSuiteArgs = {
  _id: Scalars['ID'];
  input: UpdateSuiteDto;
};


export type MutationUpdateTestArgs = {
  _id: Scalars['ID'];
  input: UpdateTestDto;
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  company: Company;
  createdAt: Scalars['DateTime'];
  owner: User;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<ProjectUser>>;
};

export type ProjectUser = {
  __typename?: 'ProjectUser';
  isReadOnly: Scalars['Boolean'];
  role: EProjectRole;
  user: User;
};

export type ProjectUserInput = {
  isReadOnly: Scalars['Boolean'];
  role: EProjectRole;
  user: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  getSuite?: Maybe<Suite>;
  getSuites: Array<Suite>;
  getTest?: Maybe<Test>;
  getTests?: Maybe<Array<Test>>;
  users: Array<User>;
};


export type QueryGetSuiteArgs = {
  _id: Scalars['ID'];
};


export type QueryGetSuitesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryGetTestArgs = {
  _id: Scalars['ID'];
};


export type QueryGetTestsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Suite = {
  __typename?: 'Suite';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  suites?: Maybe<Array<Suite>>;
  tests?: Maybe<Array<Test>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Test = {
  __typename?: 'Test';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  steps?: Maybe<Array<TestStep>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TestStep = {
  __typename?: 'TestStep';
  action: Scalars['String'];
  expected: Scalars['String'];
  index: Scalars['Int'];
};

export type TestStepInput = {
  action: Scalars['String'];
  expected: Scalars['String'];
  index: Scalars['Int'];
};

export type TokenInfoDto = {
  __typename?: 'TokenInfoDTO';
  accessToken: Scalars['String'];
};

export type UpdateCompanyDto = {
  _id: Scalars['ID'];
  title?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<CompanyUserInput>>;
};

export type UpdateSuiteDto = {
  description?: InputMaybe<Scalars['String']>;
  suites?: InputMaybe<Array<Scalars['ID']>>;
  tests?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTestDto = {
  description?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Array<TestStepInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SuitesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type SuitesQuery = { __typename?: 'Query', getSuites: Array<{ __typename?: 'Suite', _id: string, createdAt: any, description?: string | null, updatedAt: any, suites?: Array<{ __typename?: 'Suite', _id: string, title: string }> | null, tests?: Array<{ __typename?: 'Test', _id: string, title: string }> | null }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, createdAt: any, updatedAt: any, email: string, firstName: string, lastName: string }> };


export const SuitesDocument = gql`
    query Suites($skip: Int, $limit: Int, $title: String) {
  getSuites(skip: $skip, limit: $limit, title: $title) {
    _id
    createdAt
    description
    suites {
      _id
      title
    }
    tests {
      _id
      title
    }
    updatedAt
  }
}
    `;
export const UsersDocument = gql`
    query Users {
  users {
    _id
    createdAt
    updatedAt
    email
    firstName
    lastName
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Suites(variables?: SuitesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuitesQuery>(SuitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Suites', 'query');
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Users', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;