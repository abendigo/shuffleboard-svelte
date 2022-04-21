// import { RequestHandlerOutput } from '@sveltejs/kit';
// import { RequestEvent } from '@sveltejs/kit/types/private';

export async function post(event) {
  // console.log('event', event);

  const { request } = event;

  const data = await request.json();

  console.log('data', data);
  return {
    status: 401
    // body: { xxx: 'Invalid Username/Password' }
  };
}
